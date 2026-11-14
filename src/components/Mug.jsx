import { useRef, useState } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Decal, useCursor } from "@react-three/drei";
import { useNameTexture } from "../useNameTexture";
import { theme } from "../theme";

export function Mug({ color, glossy, name = "Your Name" }) {
  const nameTexture = useNameTexture(name, theme.colors.cream);
  const roughness = glossy ? 0.2 : 0.85;
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [spinning, setSpinning] = useState(true);

  useCursor(hovered);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (spinning) group.rotation.y += delta * 0.5;

    const targetScale = hovered ? 1.08 : 1;
    group.scale.setScalar(MathUtils.damp(group.scale.x, targetScale, 8, delta));
  });
  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setSpinning((isSpinning) => !isSpinning)}
    >
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 1.6, 64]} />
        <meshStandardMaterial color={color} roughness={roughness} />
        <Decal
          position={[0, 0, 0.8]}
          scale={[1.1, 0.275, 0.5]}
          map={nameTexture}
        />
      </mesh>
      {/* Coffee surface */}
      <mesh position={[0, 0.81, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.72, 64]} />
        <meshStandardMaterial color={theme.colors.coffee} roughness={0.7} />
      </mesh>

      {/* handle */}
      <mesh position={[0.7, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <torusGeometry args={[0.45, 0.1, 16, 48, Math.PI]} />
        <meshStandardMaterial color={color} roughness={roughness} />
      </mesh>
    </group>
  );
}
