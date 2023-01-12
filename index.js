import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";
import fragment from "/glsl/frag.js";

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
document.body.appendChild(canvas);
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

const renderer = new THREE.WebGLRenderer({
	antialias: true,
	canvas,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const plane = new THREE.PlaneGeometry(canvas.width, canvas.height);
const material = new THREE.ShaderMaterial({
	uniforms: {
		u_time: { value: 1.0 },
		u_resolution: {
			value: new THREE.Vector2(canvas.width, canvas.height),
		},
	},
	fragmentShader: fragment,
});

const mesh = new THREE.Mesh(plane, material);
scene.add(mesh);

//IF THE SKETCH IS NOT ANIMATED WITH THIS SINGLE LINE YOU'RE FINE
renderer.render(scene, camera);

//IF THE SKETCH IS ANIMATED OR YOU NEED u_time UNIFORM TO CHANGE
/*
function animate() {
	requestAnimationFrame(animate);
	material.uniforms.u_time.value += 0.001;
	renderer.render(scene, camera);
}
animate();
*/
