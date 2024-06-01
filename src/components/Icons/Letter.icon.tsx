import React, { useEffect, useRef } from 'react';

interface LetterIconProps {
  letter: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
  fontFamily?: string;
}

const LetterIcon: React.FC<LetterIconProps> = ({
  letter,
  size = 40,
  bgColor = 'white',
  textColor = 'DarkBlue',
  fontFamily = 'Arial',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a circular clipping path
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Set canvas background color
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set text properties
        ctx.fillStyle = textColor;
        ctx.font = `${size * 0.75}px ${fontFamily}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw the letter
        ctx.fillText(letter, canvas.width / 2, canvas.height / 2);
      }
    }
  }, [letter, size, bgColor, textColor, fontFamily]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: '50%' }}
    />
  );
};

export default LetterIcon;
