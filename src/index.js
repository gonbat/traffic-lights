import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import TrafficLight1 from "./TrafficLight1";
import TrafficLight2 from "./TrafficLight2";

import "./index.css";

function App() {
  return (
    <div className='App'>
      <TrafficLight1 />
      <TrafficLight2 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
