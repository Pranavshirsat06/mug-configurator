import { useMemo } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";

export function useNameTexture(name, ink) {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 256;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = ink;
    ctx.font = "bold 140px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2, canvas.width - 80);

    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    texture.flipY = false;
    return texture;
  }, [name, ink]);
}
