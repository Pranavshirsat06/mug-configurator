import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Mug } from "./components/Mug";
import { theme } from "./theme";
import { useState } from "react";
import {
  Page,
  Panel,
  PanelLabel,
  SwatchRow,
  Swatch,
  FinishRow,
  FinishButton,
  PanelInput,
} from "./App.styles";

export default function App() {
  const [color, setColor] = useState(theme.swatches[0].value);
  const [glossy, setGlossy] = useState(true);
  const [brandName, setBrandName] = useState("");
  return (
    <Page>
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <color attach="background" args={[theme.colors.background]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />
        <Mug color={color} glossy={glossy} name={brandName} />
        <Environment preset="city" background backgroundBlurriness={0.7} />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={7}
        />
      </Canvas>
      <Panel>
        <PanelLabel>Color</PanelLabel>
        <SwatchRow>
          {theme.swatches.map((swatch) => (
            <Swatch
              key={swatch.name}
              aria-label={swatch.name}
              $color={swatch.value}
              $active={color === swatch.value}
              onClick={() => setColor(swatch.value)}
            />
          ))}
        </SwatchRow>
        <PanelLabel>Finish</PanelLabel>
        <FinishRow>
          <FinishButton $active={!glossy} onClick={() => setGlossy(false)}>
            Matte
          </FinishButton>
          <FinishButton $active={glossy} onClick={() => setGlossy(true)}>
            Glossy
          </FinishButton>
        </FinishRow>
        <PanelLabel>Brand Name</PanelLabel>
        <FinishRow>
          <PanelInput
            value={brandName}
            maxLength={20}
            placeholder="Your name"
            onChange={(event) => setBrandName(event.target.value)}
          />
        </FinishRow>
      </Panel>
    </Page>
  );
}
