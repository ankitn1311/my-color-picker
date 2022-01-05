import React from "react";
import "./App.scss";
import ColorBox from "./components/color-box/ColorBox";
import Form from "./components/form/Form";
import SelectedColor from "./components/selected-color/SelectedColor";
import { ColorsProvider } from "./contexts/ColorsContext";

function App() {
  return (
    <ColorsProvider>
      <div className="App">
        <ColorBox />
        <div className="App__col">
          <Form />
          <SelectedColor />
        </div>
      </div>
    </ColorsProvider>
  );
}

export default App;
