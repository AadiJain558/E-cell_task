import React, { useState } from 'react';
import './Grid.css';
const Grid = () => {
  const [colors, setColors] = useState(Array(9).fill('#00407A')); 
  const [clickOrder, setClickOrder] = useState([]); 
  const handleClick = (index) => {
    if (index === 8) {
      const newColors = [...colors];
      clickOrder.forEach((clickedIndex, i) => {
        setTimeout(() => {
          newColors[clickedIndex] = '#00407A';
          setColors([...newColors]);
        }, i * 300); 
      });
    } else {
      const newColors = [...colors];
      newColors[index] = newColors[index] === '#00407A' ? '#7A0000' : '#00407A';
      setColors(newColors);
      if (!clickOrder.includes(index)) {
        setClickOrder([...clickOrder, index]);
      }
    }
  };
  return (
    <div id="cont">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};
export default Grid;
