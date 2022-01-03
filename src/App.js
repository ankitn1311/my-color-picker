import React, { useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/color-box/ColorBox";
import Form from "./components/form/Form";
import { ColorsProvider } from "./contexts/ColorsContext";

function App() {
  useEffect(() => {
    console.log("this is some issue");
  }, []);
  return (
    <ColorsProvider>
      <div className="App">
        <ColorBox />
        <Form />
      </div>
    </ColorsProvider>
    // <>hello</>
  );
}

export default App;
