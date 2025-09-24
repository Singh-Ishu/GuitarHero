import * as THREE from "three";
import styles from "./Landing.module.css";

import { GLTFLoader } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    Window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("hero-canvas"),
    alpha: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

function Landing() {
    return (
        <div className={styles["landing-container"]}>
            <canvas id="hero-canvas" className={styles["hero-canvas"]}></canvas>
        </div>
    );
}

export default Landing;
