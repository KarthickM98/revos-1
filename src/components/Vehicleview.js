import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import setdata from "./context"
// import { useSelector,useDispatch } from "react-redux";
// import { updatevehicle } from "./actions/action";

const Vehicleview = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state=>state.updatevehicle)
  const vehicle = [
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
  const [value, setValue] = useState(vehicle[0]);
  const open = Boolean(onclk);
  const id = open ? "simple-popover" : undefined;
  // const sdata = useContext(setdata)
  const handleClose = () => {
    setClk(null);
  };
  const handleClick = (e) => {
    setClk(e.currentTarget);

  };
  console.log(value);

  return (
    <div
      style={{
        height: "1024px",
        width:"260px",
        margin:"0px",
        padding:"50px",
        backgroundColor:"#DFDFDE",
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
        <Typography sx={{ p: 2 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={vehicle}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            value={value}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search Vechicle..." />
            )}
          />
        </Typography>
      </Popover>
    </div>
  );
};

export default Vehicleview;
