import React, { useState, useEffect } from "react";
import { useColors } from "../../contexts/ColorsContext";
import "./SelectedColor.scss";

const SelectedColor = () => {
  const { selected } = useColors();
  const [rgb, setRgb] = useState(true);

  const [colorValue, setColorValue] = useState(selected);

  useEffect(() => {
    let color = selected;
    if (rgb) {
      color = changeToRgb(selected);
      setColorValue(color);
    } else {
      setColorValue(selected);
    }
  }, [rgb, selected]);

  const hslToRgb = (h, s, l) => {
    let a = s * Math.min(l, 1 - l);
    let f = (n, k = (n + h / 30) % 12) =>
      l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    // return [f(0), f(8), f(4)];
    return [Math.round(f(0) * 255), Math.round(f(8)), Math.round(f(4))];
  };

  const changeToRgb = (selected) => {
    const hsl = selected.substr(3).split(",");
    const hue = hsl[0].substr(1);
    const saturation = hsl[1].substr(0, hsl[1].length - 1) / 100;
    const lightness = hsl[2].substr(0, hsl[2].length - 2) / 100;

    const rgbValues = hslToRgb(hue * 1, saturation, lightness);
    console.log({ rgbValues });
    return `rbg(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
  };

  return (
    <>
      <div
        className="SelectedColor"
        style={{ backgroundColor: selected }}></div>
      <p>{colorValue}</p>
      RGB:
      <input
        type="checkbox"
        name="type"
        id="type"
        checked={rgb}
        onChange={(e) => (e.target.checked ? setRgb(true) : setRgb(false))}
      />
    </>
  );
};

export default SelectedColor;
