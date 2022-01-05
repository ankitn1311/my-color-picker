import React from "react";
import { useColors } from "../../contexts/ColorsContext";
import Color from "../color/Color";
import "./ColorBox.scss";

const ColorBox = () => {
  const { colors, saturation, lightness } = useColors();

  return (
    <div className="ColorBox">
      {colors.map((color) => {
        return <Color key={color} color={color} />;
      })}
      <Color
        color={`hsl(${saturation + lightness},${saturation}%,${lightness}%)`}
      />
    </div>
  );
};

export default ColorBox;
