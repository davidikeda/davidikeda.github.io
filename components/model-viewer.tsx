'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  interactive?: boolean;
  autoRotate?: boolean;
  width?: string;
  height?: string;
  fallbackMessage?: string;
}

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
                                      scale = 1,
                                      interactive = true,
                                      autoRotate = true,
                                      width = '100%',
                                      height = '600px',
                                      fallbackMessage = 'Your browser environment does not support WebGL 3D rendering. This is often due to browser security restrictions in school networks. You can still view the project details above.',
                                    }: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0); // 0-100
  const [error, setError] = useState<string | null>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  const mouseDown = useRef(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  useEffect(() => {
    const hasWebGL = isWebGLAvailable();
    setWebglAvailable(hasWebGL);

    if (!hasWebGL) {
      setError(fallbackMessage);
      setIsLoading(false);
      return;
    }

    if (!containerRef.current) return;

    try {
      setProgress(5); // initial indicator

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
          75,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000
      );
      camera.position.z = 5;
      cameraRef.current = camera;

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
      // append canvas immediately so we can show progress overlay on top of it
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(-5, -5, -5);
      scene.add(directionalLight2);

      const loadModel = () => {
        const pathParts = modelPath.lastIndexOf('/');
        const basePath = modelPath.substring(0, pathParts + 1);
        const filename = modelPath.substring(pathParts + 1).replace('.obj', '');
        const mtlPath = basePath + filename + '.mtl';

        const mtlLoader = new MTLLoader();
        // MTL load (no reliable progress events here), set a small progress milestone when finished or on error
        mtlLoader.load(
            mtlPath,
            (materials) => {
              materials.preload();
              setProgress((p) => Math.max(p, 15));
              const objLoader = new OBJLoader();
              objLoader.setMaterials(materials);
              loadOBJ(objLoader);
            },
            undefined,
            () => {
              // MTL not found or error -> proceed without materials
              setProgress((p) => Math.max(p, 10));
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

              const box = new THREE.Box3().setFromObject(object);
              const center = box.getCenter(new THREE.Vector3());
              const size = box.getSize(new THREE.Vector3());

              object.position.sub(center);

              const maxDim = Math.max(size.x, size.y, size.z);
              const normalizeScale = 3 / maxDim;
              object.scale.multiplyScalar(normalizeScale * scale);

              scene.add(object);
              setProgress(100);
              setTimeout(() => setIsLoading(false), 100); // small delay so progress UI shows 100%
            },
            (evt) => {
              // evt is a ProgressEvent; total might be 0/undefined
              try {
                if (evt.lengthComputable && evt.total) {
                  const pct = Math.round((evt.loaded / evt.total) * 100);
                  setProgress(pct);
                } else {
                  // fallback: bump progress slightly so user sees movement
                  setProgress((p) => Math.min(95, p + 8));
                }
              } catch {
                setProgress((p) => Math.min(95, p + 8));
              }
              // for debugging:
              // console.log(`Loading model: ${(evt.loaded / (evt.total || 1) * 100).toFixed(2)}%`);
            },
            (err) => {
              console.error('Error loading model:', err);
              setError('Failed to load 3D model');
              setIsLoading(false);
            }
        );
      };

      loadModel();

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

      const handleResize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);

      const animate = () => {
        requestAnimationFrame(animate);

        if (modelRef.current) {
          if (interactive && mouseDown.current) {
            modelRef.current.rotation.x = targetRotationX.current;
            modelRef.current.rotation.y = targetRotationY.current;
          } else if (autoRotate && !mouseDown.current) {
            modelRef.current.rotation.x += 0.005;
            modelRef.current.rotation.y += 0.01;
          } else {
            modelRef.current.rotation.x +=
                (targetRotationX.current - modelRef.current.rotation.x) * 0.05;
            modelRef.current.rotation.y +=
                (targetRotationY.current - modelRef.current.rotation.y) * 0.05;
          }
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        renderer.domElement.removeEventListener('touchstart', onTouchStart);
        renderer.domElement.removeEventListener('touchmove', onTouchMove);
        renderer.domElement.removeEventListener('touchend', onTouchEnd);
        if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.error('Error setting up 3D viewer:', err);
      setError(fallbackMessage);
      setIsLoading(false);
      return () => {};
    }
    // include scale if you expect it to change at runtime
  }, [modelPath, interactive, autoRotate, fallbackMessage, scale]);

  return (
      <div className="w-full">
        {error && (
            <div className="flex items-center justify-center bg-amber-50 rounded-lg border border-amber-200 p-6" style={{ width, height }}>
              <div className="text-center">
                <div className="text-2xl mb-2">⚠️</div>
                <div className="text-amber-900 font-medium mb-2">3D Viewer Not Available</div>
                <div className="text-sm text-amber-800">{error}</div>
              </div>
            </div>
        )}

        {/* Container always present when no error so we can show canvas + progress overlay */}
        <div
            ref={containerRef}
            style={{
              width,
              height,
              cursor: interactive ? 'grab' : 'default',
              display: error ? 'none' : 'block',
              position: 'relative', // required for overlay
            }}
        >
          {/* Progress overlay */}
          {isLoading && (
              <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 20,
                    pointerEvents: 'none', // let pointer events pass to the canvas (optional)
                    background: 'rgba(255,255,255,0.6)',
                  }}
              >
                <div className="mb-3 text-zinc-700">Loading 3D model... {progress}%</div>
                <div style={{ width: '60%', maxWidth: 400, height: 12, background: '#e6e6e6', borderRadius: 6, overflow: 'hidden' }}>
                  <div
                      style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: '#4f46e5',
                        transition: 'width 200ms linear',
                      }}
                  />
                </div>
              </div>
          )}
        </div>
      </div>
  );
}