import styles from "./Landing.module.css";

import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";

import { useEffect } from "react";

function Landing() {
    useEffect(() => {
        //Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("hero-canvas"),
            alpha: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        camera.position.set(0, 0, 2);

        // const controls = new OrbitControls(camera, renderer.domElement);

        const Loader = new GLTFLoader();
        let guitar;
        Loader.load(
            "src/assets/Guitar.glb",
            (gltf) => {
                guitar = gltf.scene;
                const scalingfFactor = 2;
                guitar.scale.set(
                    scalingfFactor,
                    scalingfFactor,
                    scalingfFactor
                );
                guitar.rotation.y = -Math.PI / 2;
                scene.add(guitar);
            },
            undefined,
            (error) => {
                console.error("Error loading model:", error);
            }
        );

        //Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.6));

        const animate = () => {
            requestAnimationFrame(animate);
            // controls.update();
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }, []);
    return (
        <div className={styles["landing-container"]}>
            <canvas id="hero-canvas" className={styles["hero-canvas"]}></canvas>
        </div>
    );
}

export default Landing;
