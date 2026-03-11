// Based on a tutorial by Dan Greenheck on YouTube (https://www.youtube.com/watch?app=desktop&v=aOQuuotM-Ww)

import * as THREE from 'three';
//Imports Three.js library
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// allows import of gltf file
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//allows for camera to move around the scene / model

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

const div = document.querySelector('#detailViewContent');
const detailWidth = div.offsetWidth; // gets internal width of the detail view article for use in the renderer
const detailHeight = div.offsetHeight; // gets internal height of the detail view article for use in the renderer

console.log(detailWidth, detailHeight);

//(window.innerWidth, window.innerHeight)
renderer.setSize(detailWidth, detailHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.VSMShadowMap;
// light.shadow.radius=0.2;
// light.shadow.blurSamples=2;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(12, detailWidth / detailHeight, 1, 1000);
camera.position.set(15, 8, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 8;
controls.maxDistance = 30;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const AmbientLight = new THREE.AmbientLight(0xffffff, 8, 2, 0.1, 0.2);
// spotLight.position.set(0, 25, 0);
// AmbientLight.castShadow = true;
// AmbientLight.shadow.bias = -0.0001;
scene.add(AmbientLight);

const loader = new GLTFLoader().setPath('assets/models/gltf/');
loader.load('figureModel.gltf', (gltf) => {
  console.log('loading model');
  const mesh = gltf.scene;

document.getElementById("detailViewContent").appendChild(renderer.domElement);
renderer.domElement.style.display = "none";

  mesh.position.set(0, 0, 0);
  scene.add(mesh);

  document.getElementById('progress-container').style.display = 'none';
}, (xhr) => {
  console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
  console.error(error);
});


window.addEventListener('resize', () => {
  camera.aspect = detailWidth / detailHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(detailWidth, detailHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();