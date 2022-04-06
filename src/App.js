import "./App.css";
import React from "react";
import Vehicleview from "./components/Vehicleview";

function App() {
  // header is not route component//

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Vehicleview />
      </div>
    </>
  );
}

export default App;
