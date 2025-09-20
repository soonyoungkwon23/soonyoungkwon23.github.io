---
layout: default
title: TV Man with Blender
description: A CAD + Blender modeling project
img: assets/img/TV_man.png
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
  // 1. Key light (main light from left side)
  const keyLight = new THREE.DirectionalLight(0xffffff, 0.5);
  keyLight.position.set(5, -3, 2); // moved to left
  keyLight.castShadow = true;
  scene.add(keyLight);
  
  // 2. Fill light (softer, from right side)
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
  fillLight.position.set(-5, -2, 2); // opposite side
  scene.add(fillLight);
  
  // 3. Rim / back light (from top-right behind)
  const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
  rimLight.position.set(-3, -6, -4); 
  scene.add(rimLight);
  
  // Ambient stays the same
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

  // Model loading
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
  loader.setDRACOLoader(dracoLoader);
  
  const baseUrl = '{{ site.baseurl | default: "" }}';
  const modelPath = `${baseUrl}/assets/models/TV_man.gltf`;
  
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
      
      });
      
      model.traverse(function(child) {
        if (child.isMesh) {
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

**Created:** June 7, 2025 | **Inspired by:** Grant Abbitt  

A smooth and fully rendered 3D model a walking TV man originally designed by Grant Abbitt, emphasizing **smooth designs and rendering on Blender**. Developed with **Blender 4.4**.

> *Note: Could benefit from additonal rendering effects.*
