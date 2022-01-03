import { createContext, useContext, useReducer, useEffect } from "react";

const ColorsContext = createContext(null);

const ColorsDispatchContext = createContext(null);

const initialState = {
  colors: ["hsl(210,50%,50%)"],
  saturation: 50,
  lightness: 50,
  selected: "hsl(210,50%,50%",
};

export function ColorsProvider({ children }) {
  const [state, dispatch] = useReducer(colorsReducer, initialState);

  useEffect(() => {
    let colors = [];
    for (let hue = 0; hue < 360; hue++) {
      colors.push(`hsl(${hue},${state.saturation}%,${state.lightness}%)`);
    }
    dispatch({ type: "change-colors", payload: colors });
  }, [state.saturation, state.lightness]);

  return (
    <ColorsContext.Provider value={state}>
      <ColorsDispatchContext.Provider value={dispatch}>
        {children}
      </ColorsDispatchContext.Provider>
    </ColorsContext.Provider>
  );
}

export function useColors() {
  return useContext(ColorsContext);
}

export function useColorsDispatch() {
  return useContext(ColorsDispatchContext);
}

function colorsReducer(state, action) {
  switch (action.type) {
    case "change-colors": {
      return { ...state, colors: action.payload };
    }
    case "change-saturation": {
      return { ...state, saturation: action.payload };
    }
    case "change-lightness": {
      return { ...state, lightness: action.payload };
    }
    case "change-selected-color": {
      return { ...state, selected: action.payload };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
