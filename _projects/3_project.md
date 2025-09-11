---
layout: page
title: TIE Fighter with Blender
description: a project that redirects to another website
img: assets/img/7.jpg
importance: 2
category: CAD + Blender Modeling
---

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.



<div id="viewer-container" style="width:100%; height:500px; border:1px solid #ccc; margin-top:2rem;">
  <canvas id="viewer"></canvas>
</div>

<script>
  const container = document.getElementById("viewer-container");
  const canvas = document.getElementById("viewer");

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(2, 2, 5);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Lighting
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);

  // Controls
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Debug cube (helps confirm rendering works)
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  );
  scene.add(box);

  // Load model
  const loader = new THREE.GLTFLoader();
  loader.load("/assets/models/my_model.glb", function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5); // adjust if needed
    model.position.set(0, 0, 0);
    scene.add(model);
  }, undefined, function (error) {
    console.error("Error loading model:", error);
  });

  // Handle resizing
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
</script>
