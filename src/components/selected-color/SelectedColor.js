import React, { useState } from "react";
import { useColors } from "../../contexts/ColorsContext";
import "./SelectedColor.scss";

const SelectedColor = () => {
  const { selected } = useColors();
  const [rgb, setRgb] = useState(true);

  const hslToRgb = (h, s, l) => {
    var r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  const changeToRgb = (selected) => {
    // hsl( , , )
    selected.substr(3).split(",");
  };

  return (
    <>
      <div
        className="SelectedColor"
        style={{ backgroundColor: selected }}></div>
      <p>{rgb ? changeToRgb(selected) : selected}</p>
      RGB:{" "}
      <input
        type="checkbox"
        name="type"
        id="type"
        onChange={(e) => (e.target.checked ? setRgb(true) : setRgb(false))}
      />
    </>
  );
};

export default SelectedColor;
