import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
