import React from "react";
import { useColors } from "../../contexts/ColorsContext";
import "./SelectedColor.scss";

const SelectedColor = () => {
  const { selected } = useColors();
  return (
    <div className="SelectedColor" style={{ backgroundColor: selected }}></div>
  );
};

export default SelectedColor;
