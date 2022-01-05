import React from "react";
import { useColors, useColorsDispatch } from "../../contexts/ColorsContext";

import "./Form.scss";

const Form = () => {
  const state = useColors();
  const dispatch = useColorsDispatch();

  return (
    <form className="Form">
      <div className="Form__control">
        <label className="Form__control--label" htmlFor="saturation">
          Saturation:
        </label>
        <input
          className="Form__control--input"
          type="range"
          name="saturation"
          id="saturation"
          min="0"
          max="100"
          value={state.saturation}
          onChange={(e) =>
            dispatch({ type: "change-saturation", payload: e.target.value })
          }
        />
        {state.saturation}%
      </div>
      <div className="Form__control">
        <label className="Form__control--label" htmlFor="lightness">
          Lightness:
        </label>
        <input
          className="Form__control--input"
          type="range"
          min="0"
          max="100"
          value={state.lightness}
          onChange={(e) =>
            dispatch({ type: "change-lightness", payload: e.target.value })
          }
          name="lightness"
          id="lightness"
        />
        {state.lightness}%
      </div>
    </form>
  );
};

export default Form;
