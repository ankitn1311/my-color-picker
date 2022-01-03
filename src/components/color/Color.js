import React, { useMemo } from "react";
import "./Color.scss";

const Color = ({ color }) => {
  return <div className="Color" style={{ backgroundColor: color }}></div>;
};

export default Color;
