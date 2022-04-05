import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import LineChart from "./components/chart";
import TripTable from "./components/TripTable";
import Vehicleview from "./components/Vehicleview";
import VehicleStatus from "./components/VehicleStatus";

function App() {
  // header is not route component//

  return (
    <>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Vehicleview />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                // border: "2px solid black",
                // backgroundColor: "red",
              }}
            >
              <VehicleStatus />
              <LineChart />
            </div>
            <TripTable />
          </div>
          
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Route path ='/home' element={<Home/>}/>
          <Route path ='title/:category' element={<Bollywood/>}/>
          <Route path ='/:show/:id' element={<ShowContent/>}/>
          <Route path ='/*' element={<PageNotFound/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
