import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * Abstract "data core" hero scene: a faceted core inside orbital rings and a
 * particle field. Pointer + scroll drive slow, cinematic motion.
 */

function useReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Core({ calm }: { calm: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    const targetX = calm ? 0 : pointer.y * 0.28;
    const targetY = (calm ? 0 : pointer.x * 0.5) + t * (calm ? 0.02 : 0.06);
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, delta * 2.2);
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, delta * 2.2);
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.25;
      const s = 1 + Math.sin(t * 0.9) * 0.02;
      inner.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#0e1a24"
          metalness={0.9}
          roughness={0.28}
          emissive="#0b3a4a"
          emissiveIntensity={0.45}
          flatShading
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshBasicMaterial color="#3fd0e6" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.25, 0.006, 8, 220]} />
        <meshBasicMaterial color="#63b3ff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, Math.PI / 5, 0]}>
        <torusGeometry args={[2.75, 0.005, 8, 220]} />
        <meshBasicMaterial color="#a07dff" transparent opacity={0.4} />
      </mesh>
      <Nodes calm={calm} />
    </group>
  );
}

function Nodes({ calm }: { calm: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 520;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.9 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.55;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame((_, delta) => {
    if (ref.current && !calm) ref.current.rotation.y += delta * 0.035;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.022}
        color="#8fe6f5"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroScene() {
  const calm = useReducedMotion();
  const wide = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: wide ? [-2.5, 0.3, 6.4] : [0, 0.4, 7.4], fov: 42 }}
      frameloop={calm ? "demand" : "always"}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 4]} intensity={1.6} color="#9adcff" />
      <pointLight position={[-4, -2, -3]} intensity={22} color="#7b5cff" distance={12} />
      <pointLight position={[3, 1, 3]} intensity={14} color="#25e0d8" distance={10} />
      <Core calm={calm} />
    </Canvas>
  );
}
