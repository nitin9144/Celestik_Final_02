"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * ScrollBackground
 *
 * Renders a fixed full-screen canvas that plays through a frame sequence
 * as the user scrolls the page.
 */
interface ScrollBackgroundProps {
  frameCount?: number;
  framePath?: (frameNumber: number) => string;
  scrollStart?: number;
  scrollEnd?: number | null;
  style?: React.CSSProperties;
}

export default function ScrollBackground({
  frameCount = 240,
  framePath = (n: number) =>
    `/sequence/ezgif-frame-${String(n).padStart(3, "0")}.jpg`,
  scrollStart = 0,
  scrollEnd = null,
  style = {},
}: ScrollBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderFrame(currentFrameRef.current);
  }, []);

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const w = iw * scale;
    const h = ih * scale;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }, []);

  const handleScroll = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const end =
      scrollEnd !== null
        ? scrollEnd
        : document.documentElement.scrollHeight - window.innerHeight;

    const eff_start = scrollStart;
    const eff_end = Math.max(end, eff_start + 1);

    const progress = Math.min(
      Math.max((window.scrollY - eff_start) / (eff_end - eff_start), 0),
      1
    );
    const frameIndex = Math.min(
      Math.floor(progress * frameCount),
      frameCount - 1
    );

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => renderFrame(frameIndex));
    }
  }, [frameCount, scrollStart, scrollEnd]);

  useEffect(() => {
    // Preload images
    const images: HTMLImageElement[] = new Array(frameCount);
    imagesRef.current = images;

    // First frame with high priority — shown immediately
    const first = new Image();
    first.src = framePath(1);
    first.onload = () => {
      images[0] = first;
      resizeCanvas();
    };
    images[0] = first;

    // Remaining frames
    for (let i = 2; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      images[i - 1] = img;
    }

    resizeCanvas();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [frameCount, framePath, scrollStart, scrollEnd, resizeCanvas, handleScroll]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        background: "#040408",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
