'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

interface ModelViewerProps {
  modelPath: string;
  interactive?: boolean;
  autoRotate?: boolean;
  width?: string;
  height?: string;
  fallbackMessage?: string;
}

// Check if WebGL is available
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('webgl2'))
    );
  } catch {
    return false;
  }
}

export default function ModelViewer({
  modelPath,
  interactive = true,
  autoRotate = true,
  width = '100%',
  height = '600px',
  fallbackMessage = 'Your browser environment does not support WebGL 3D rendering. This is often due to browser security restrictions in school networks. You can still view the project details above.',
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  const mouseDown = useRef(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  useEffect(() => {
    // Check WebGL availability on mount
    const hasWebGL = isWebGLAvailable();
    setWebglAvailable(hasWebGL);

    if (!hasWebGL) {
      setError(fallbackMessage);
      setIsLoading(false);
      return;
    }

    if (!containerRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      cameraRef.current = camera;

      // Renderer setup
      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch (e) {
        setError(fallbackMessage);
        setIsLoading(false);
        return;
      }

      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      renderer.setPixelRatio(window.devicePixelRatio);
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(-5, -5, -5);
      scene.add(directionalLight2);

      // Load model with optional MTL support
      const loadModel = () => {
        // Extract base path and filename from modelPath
        const pathParts = modelPath.lastIndexOf('/');
        const basePath = modelPath.substring(0, pathParts + 1);
        const filename = modelPath.substring(pathParts + 1).replace('.obj', '');
        const mtlPath = basePath + filename + '.mtl';

        // Try to load MTL first if it exists
        const mtlLoader = new MTLLoader();
        mtlLoader.load(
          mtlPath,
          (materials) => {
            // MTL loaded successfully, prepare OBJ loader with materials
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            loadOBJ(objLoader);
          },
          undefined,
          () => {
            // MTL failed to load, load OBJ without materials
            console.log('MTL file not found, loading OBJ without materials');
            const objLoader = new OBJLoader();
            loadOBJ(objLoader);
          }
        );
      };

      const loadOBJ = (loader: OBJLoader) => {
        loader.load(
          modelPath,
          (object) => {
            modelRef.current = object;

            // Center and scale the model
            const box = new THREE.Box3().setFromObject(object);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            object.position.sub(center);

            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 3 / maxDim;
            object.scale.multiplyScalar(scale);

            scene.add(object);
            setIsLoading(false);
          },
          (progress) => {
            console.log(`Loading model: ${(progress.loaded / progress.total * 100).toFixed(2)}%`);
          },
          (error) => {
            console.error('Error loading model:', error);
            setError('Failed to load 3D model');
            setIsLoading(false);
          }
        );
      };

      loadModel();

      // Mouse events for interactive control
      const onMouseDown = (e: MouseEvent) => {
        if (!interactive) return;
        mouseDown.current = true;
        mouseX.current = e.clientX;
        mouseY.current = e.clientY;
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!mouseDown.current || !interactive) return;

        const deltaX = e.clientX - mouseX.current;
        const deltaY = e.clientY - mouseY.current;

        targetRotationY.current += deltaX * 0.01;
        targetRotationX.current += deltaY * 0.01;

        mouseX.current = e.clientX;
        mouseY.current = e.clientY;
      };

      const onMouseUp = () => {
        mouseDown.current = false;
      };

      renderer.domElement.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      // Touch events for mobile
      let touchStartX = 0;
      let touchStartY = 0;

      const onTouchStart = (e: TouchEvent) => {
        if (!interactive || e.touches.length !== 1) return;
        mouseDown.current = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!mouseDown.current || !interactive || e.touches.length !== 1) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;

        targetRotationY.current += deltaX * 0.01;
        targetRotationX.current += deltaY * 0.01;

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      };

      const onTouchEnd = () => {
        mouseDown.current = false;
      };

      renderer.domElement.addEventListener('touchstart', onTouchStart);
      renderer.domElement.addEventListener('touchmove', onTouchMove);
      renderer.domElement.addEventListener('touchend', onTouchEnd);

      // Handle window resize
      const handleResize = () => {
        if (!containerRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        if (modelRef.current) {
          if (interactive && mouseDown.current) {
            // Direct control while dragging
            modelRef.current.rotation.x = targetRotationX.current;
            modelRef.current.rotation.y = targetRotationY.current;
          } else if (autoRotate && !mouseDown.current) {
            // Auto-rotate when not dragging
            modelRef.current.rotation.x += 0.005;
            modelRef.current.rotation.y += 0.01;
          } else {
            // Smooth easing when released
            modelRef.current.rotation.x +=
              (targetRotationX.current - modelRef.current.rotation.x) * 0.05;
            modelRef.current.rotation.y +=
              (targetRotationY.current - modelRef.current.rotation.y) * 0.05;
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('touchstart', onTouchStart);
        renderer.domElement.removeEventListener('touchmove', onTouchMove);
        renderer.domElement.removeEventListener('touchend', onTouchEnd);
        containerRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
      };
    } catch (err) {
      console.error('Error setting up 3D viewer:', err);
      setError(fallbackMessage);
      setIsLoading(false);
      return () => {};
    }
  }, [modelPath, interactive, autoRotate, fallbackMessage]);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex items-center justify-center" style={{ width, height }}>
          <div className="text-zinc-500">Loading 3D model...</div>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center bg-amber-50 rounded-lg border border-amber-200 p-6" style={{ width, height }}>
          <div className="text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-amber-900 font-medium mb-2">3D Viewer Not Available</div>
            <div className="text-sm text-amber-800">{error}</div>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        style={{
          width,
          height,
          cursor: interactive ? 'grab' : 'default',
          display: isLoading || error ? 'none' : 'block',
        }}
      />
    </div>
  );
}
