'use client';

import { useEffect, useRef, useState } from 'react';

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Theme-aware color schemes
    const getThemeColors = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');

      if (isDarkMode) {
        return {
          background: 'hsl(220, 35%, 4%)',
          cursorGradient: {
            start: 'rgba(99, 102, 241, 0.6)',
            mid: 'rgba(59, 130, 246, 0.3)',
          },
          ambientGradients: [
            { x: canvas.width * 0.3, y: canvas.height * 0.3, radius: 300, color: 'rgba(59, 130, 246, 0.4)' },
            { x: canvas.width * 0.7, y: canvas.height * 0.4, radius: 350, color: 'rgba(124, 58, 237, 0.3)' },
            { x: canvas.width * 0.5, y: canvas.height * 0.6, radius: 280, color: 'rgba(14, 165, 233, 0.25)' },
          ],
        };
      } else {
        return {
          background: 'hsl(0, 0%, 98%)',
          cursorGradient: {
            start: 'rgba(147, 197, 253, 0.5)',
            mid: 'rgba(196, 181, 253, 0.25)',
          },
          ambientGradients: [
            { x: canvas.width * 0.3, y: canvas.height * 0.3, radius: 300, color: 'rgba(147, 197, 253, 0.3)' },
            { x: canvas.width * 0.7, y: canvas.height * 0.4, radius: 350, color: 'rgba(196, 181, 253, 0.25)' },
            { x: canvas.width * 0.5, y: canvas.height * 0.6, radius: 280, color: 'rgba(165, 180, 252, 0.2)' },
          ],
        };
      }
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Smooth mouse following with easing
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.05;

      const colors = getThemeColors();

      // Clear canvas
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Apply blur for liquid effect
      ctx.filter = 'blur(60px)';

      // Draw cursor-following gradient
      const cursorGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        400
      );
      cursorGradient.addColorStop(0, colors.cursorGradient.start);
      cursorGradient.addColorStop(0.5, colors.cursorGradient.mid);
      cursorGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ambient gradients with subtle movement
      colors.ambientGradients.forEach((grad, index) => {
        const time = Date.now() * 0.0001;
        const offsetX = Math.sin(time + index) * 50;
        const offsetY = Math.cos(time + index) * 50;

        const gradient = ctx.createRadialGradient(
          grad.x + offsetX,
          grad.y + offsetY,
          0,
          grad.x + offsetX,
          grad.y + offsetY,
          grad.radius
        );
        gradient.addColorStop(0, grad.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      ctx.filter = 'none';
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ isolation: 'isolate' }}
      />
      {/* Grid overlay for depth effect - theme aware */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `
            : `
              linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
            `,
          backgroundSize: '80px 80px',
        }}
      />
    </>
  );
}
