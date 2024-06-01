import React, { useEffect, useRef } from 'react';

interface LetterIconProps {
  letter: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
  fontFamily?: string;
}

const getRandomDarkColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = Math.floor(Math.random() * 16); // 0 to 15
    const darkValue = Math.floor(value / 2); // Ensures the value is in the darker half
    color += letters[darkValue] + letters[darkValue]; // Doubled for two hex digits
  }
  return color;
};

const LetterIcon: React.FC<LetterIconProps> = ({
  letter,
  size = 40,
  bgColor = 'white',
  textColor = getRandomDarkColor(),
  fontFamily = 'Arial',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;

      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      if (ctx) {
        ctx.scale(dpr, dpr);

        // Clear the canvas
        ctx.clearRect(0, 0, size, size);

        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Set canvas background color
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, size, size);

        // Set text properties
        ctx.fillStyle = textColor;
        ctx.font = `${size * 0.6}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw the letter
        ctx.fillText(letter, size / 2, size / 2);
      }
    }
  }, [letter, size, bgColor, textColor, fontFamily]);

  return <canvas ref={canvasRef} style={{ borderRadius: '50%' }} />;
};

export default LetterIcon;
