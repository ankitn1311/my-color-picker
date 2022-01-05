import React from "react";
import { useColorsDispatch } from "../../contexts/ColorsContext";
import "./Color.scss";

const Color = ({ color }) => {
  const dispatch = useColorsDispatch();
  return (
    <div
      className="Color"
      style={{ backgroundColor: color }}
      onClick={() =>
        dispatch({ type: "change-selected-color", payload: color })
      }></div>
  );
};

export default Color;
