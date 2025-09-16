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

  // Lighting setup - realistic three-point lighting
  // 1. Key light (main frontal light)
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
  keyLight.position.set(2, 3, 5); // slightly above and front-right
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  scene.add(keyLight);

  // 2. Fill light (softens shadows)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
  fillLight.position.set(-2, 1.5, 3); // front-left
  fillLight.castShadow = false;
  scene.add(fillLight);

  // 3. Rim / back light (subtle outline)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
  rimLight.position.set(0, 3, -5); // behind model
  rimLight.castShadow = false;
  scene.add(rimLight);

  // Optional ambient light for soft overall illumination
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

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
  
  const baseUrl = '{{ site.baseurl | default: "" }}';
  const modelPath = `${baseUrl}/assets/models/character_head.glb`;
  
  loader.load(
    modelPath,
    function(gltf) {
      const model = gltf.scene;
      
      // Center and scale model
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDimension;
      model.scale.setScalar(scale);
      model.position.copy(center).multiplyScalar(-scale);
      
      // Matte skin material
      const skinMaterial = new THREE.MeshStandardMaterial({
        color: 0xE0B69C, // light skin tone
        metalness: 0.0,  // non-metallic
        roughness: 0.8   // matte
      });
      
      model.traverse(function(child) {
        if (child.isMesh) {
          child.material = skinMaterial;
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      scene.add(model);
      scene.remove(debugCube);
      loadingIndicator.style.display = 'none';
    },
    function(progress) {},
    function(error) {
      loadingIndicator.style.display = 'none';
      errorMessage.style.display = 'block';
    }
  );

  // Handle resize
  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  window.addEventListener('resize', onWindowResize, false);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
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
