---
layout: default
title: Character Head with Blender
description: A CAD + Blender modeling project
img: assets/img/character_head.jpg
importance: 2
category: CAD + Blender Modeling
---

# {{ page.title }}

{{ page.description }}

<div id="viewer-container" style="width: 100%; height: 500px; border: 1px solid #ccc; margin: 2rem 0; position: relative; background: #f8f8f8;">
  <canvas id="viewer" style="display: block; width: 100%; height: 100%;"></canvas>
  <div id="loading-indicator" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #666; font-family: Arial, sans-serif;">
    Loading 3D model...
  </div>
  <div id="error-message" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #d32f2f; font-family: Arial, sans-serif; display: none;">
    Failed to load 3D model
  </div>
</div>

<script type="module">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

window.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById("viewer-container");
  const canvas = document.getElementById("viewer");
  const loadingIndicator = document.getElementById("loading-indicator");
  const errorMessage = document.getElementById("error-message");

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    45, 
    container.clientWidth / container.clientHeight, 
    0.1, 
    1000
  );
  camera.position.set(2, 2, 5);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Lighting setup
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7.5);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  scene.add(dirLight);

  // Back light to illuminate the rear of the model
  const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
  backLight.position.set(-5, 5, -7.5);
  backLight.castShadow = false; // Disable shadows for back light to avoid conflicts
  scene.add(backLight);

  // Optional: Add a subtle fill light from the side
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
  fillLight.position.set(-8, 3, 2);
  fillLight.castShadow = false;
  scene.add(fillLight);

  // Controls setup
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 10;

  // Debug cube (will be removed when model loads)
  const debugCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ 
      color: 0x00ff00,
      transparent: true,
      opacity: 0.7
    })
  );
  debugCube.castShadow = true;
  debugCube.receiveShadow = true;
  scene.add(debugCube);

  // Ground plane
  const groundGeometry = new THREE.PlaneGeometry(10, 10);
  const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;
  scene.add(ground);

  // Model loading
  const loader = new GLTFLoader();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  loader.setDRACOLoader(dracoLoader);
  
  // Get base URL for GitHub Pages
  const baseUrl = '{{ site.baseurl | default: "" }}';
  const modelPath = `${baseUrl}/assets/models/character_head.glb`;
  
  console.log('Loading model from:', modelPath);
  
  loader.load(
    modelPath,
    function(gltf) {
      console.log('Model loaded successfully:', gltf);
      
      const model = gltf.scene;
      
      // Calculate bounding box to center and scale the model
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      
      // Scale model to fit in scene
      const maxDimension = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDimension; // Scale to fit in 2 units
      model.scale.setScalar(scale);
      
      // Center the model
      model.position.copy(center).multiplyScalar(-scale);
      
      // Create metallic grey material
      const metallicGreyMaterial = new THREE.MeshStandardMaterial({
        color: 0xC5C5C5,        // Medium grey base color
        metalness: 0.7,         // High metallic property
        roughness: 0.3,         // Low roughness for shiny metal
        envMapIntensity: 1.0    // Environment reflection intensity
      });
      
      // Apply material and enable shadows for model
      model.traverse(function(child) {
        if (child.isMesh) {
          child.material = metallicGreyMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      scene.add(model);
      
      // Remove debug cube when model loads
      scene.remove(debugCube);
      
      // Hide loading indicator
      loadingIndicator.style.display = 'none';
      
      console.log('Model added to scene');
    },
    function(progress) {
      console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
    },
    function(error) {
      console.error('Error loading model:', error);
      
      // Hide loading indicator and show error message
      loadingIndicator.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.innerHTML = `
        Failed to load 3D model<br>
        <small style="font-size: 12px;">Check console for details<br>
        Expected path: ${modelPath}</small>
      `;
    }
  );

  // Handle window resize
  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  window.addEventListener('resize', onWindowResize, false);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate debug cube if still visible
    if (debugCube.parent) {
      debugCube.rotation.x += 0.01;
      debugCube.rotation.y += 0.01;
    }
    
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();
});
</script>

**Created:** July 17, 2025 | **Inspired by:** Grant Abbitt  

A detailed 3D model a character head originally designed by Grant Abbitt, emphasizing **sculpting, modeling, and creavtivity on Blender**. Developed with **Blender 4.4**.

> *Note: Could benefit from full material and color rendering.*
