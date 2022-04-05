import React, { useState, useContext } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import VehicleStatus from "./VehicleStatus";
import LineChart from "./chart";
import TripTable from "./TripTable";
import { conData } from "./context";

const Vehicleview = () => {
  const [vehicle] = useContext(conData);
  const [vehicle1,setVe] = useState(vehicle);
  const veh = [
    "vehicle1",
    "vehicle2",
    "vehicle3",
    "vehicle4",
    "vehicle5",
    "vehicle6",
    "vehicle7",
    "vehicle8",
  ];
  const [onclk, setClk] = useState(null);
  const [value, setValue] = useState(veh[0]);
  const open = Boolean(onclk);
  const id = open ? "simple-popover" : undefined;
  const handleClose = () => {
    setClk(null);
  };
  const handleClick = (e) => {
    setClk(e.currentTarget);
  };
  console.log(value);
  console.log(vehicle1);
  const handleBtnclk = (name) => {
    const newData = vehicle.filter((x) => x.name === value);
    setVe(newData);
  };
  const delV =(name)=>{
    const newData = vehicle.filter((x)=>x.name !== name)
    setVe(newData);
  }
  return (
    <>
      <div
        style={{
          height: "1024px",
          width: "260px",
          margin: "0px",
          padding: "50px",
          backgroundColor: "#DFDFDE",
        }}
      >
        <h5>Vechicle Viewer :</h5>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          + Add vehicle
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={onclk}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2, height: "280px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={veh}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              value={value}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TextField {...params} label="Search Vechicle..." />
                  <button
                    style={{
                      height: "40px",
                      width: "60px",
                      fontSize: "15px",
                      margin: "10px",
                      borderRadius: "5px",
                      border: "0px",
                    }}
                    onClick={handleBtnclk}
                  >
                    Add
                  </button>
                </span>
              )}
            />
          </Typography>
        </Popover>
        <ul>
          <div>
            {vehicle1.map((x) => (
              <li
                style={{
                  listStyleType: "none",
                  padding: "5px",
                  margin: "10px 0px",
                  background: "white",
                  width: "110px",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <b>{x.name}</b>
                <i onClick={() => delV(x.name)}>&#10006;</i>
              </li>
            ))}
          </div>
        </ul>
      </div>
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
          }}
        >
          <VehicleStatus name={`${value}`} />
          <LineChart />
        </div>
        <TripTable />
      </div>
    </>
  );
};

export default Vehicleview;
