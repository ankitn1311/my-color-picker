import React from "react";
import { useColors } from "../../contexts/ColorsContext";
import Color from "../color/Color";
import "./ColorBox.scss";

const ColorBox = () => {
  const { colors } = useColors();
  // const colors = [];

  return (
    <div className="ColorBox">
      {colors.map((color) => {
        return <Color key={color} color={color} />;
      })}
    </div>
  );
};

export default ColorBox;
