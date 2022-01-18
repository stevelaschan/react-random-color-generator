import './App.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000');

  const getRgb = () => Math.floor(Math.random() * 256);

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    const singlecolor = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };

    setColor(rgbToHex(singlecolor.r, singlecolor.g, singlecolor.b));
  };

  return (
    <div style={{ backgroundColor: color }} className="container">
      <button style={{ color: color }} onClick={handleGenerate}>
        Generate
      </button>
      <div>
        <h3 style={{ backgroundColor: color }}>Generated Color: {color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
