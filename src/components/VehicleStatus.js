import React from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const VehicleStatus = (props) => {

  const lightTheme = createTheme({ palette: { mode: "light" } });
  const statusArr = {
    elevation: "200m",
    temperature: "30c",
    locked: false,
    battery: "75.6%",
    throttle: true,
    controller: true,
    motor: true,
    overload: true,
    overcurrent: true,
  };
  const st1 = {
    display: "flex",
    flexdirection: "row",
    justifyContent: "space-between",
  };
  const st2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "20px",
    width: "300px",
  };

  return (
    <div>
      <div
        style={{
          margin: "20px",
        }}
      >
        Vehicle &gt; {props.name}
      </div>
      <h3>vehicle status</h3>
      <Grid container spacing={2}>
        {[lightTheme].map((theme, index) => (
          <Grid item xs={6} key={index}>
            <ThemeProvider theme={theme}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#DFDFDE",
                  height: "210px",
                  width: "450px",
                  borderRadius: "5px",
                }}
              >
                <div style={st2}>
                  <div style={st1}>
                    <b>Elevation:</b>
                    {statusArr.elevation}
                  </div>
                  <div style={st1}>
                    <b>Temperature:</b>
                    {statusArr.temperature}
                  </div>
                  <div style={st1}>
                    <b>Loacked:</b>
                    {statusArr.locked ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                  <div style={st1}>
                    <b>Battery:</b>
                    {statusArr.battery}
                  </div>
                </div>
                <div style={st2}>
                  <div style={st1}>
                    <b>Throttle: </b>
                    {statusArr.throttle ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                  <div style={st1}>
                    <b>Controller:</b>
                    {statusArr.controller ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                  <div style={st1}>
                    <b>Motor:</b>
                    {statusArr.motor ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                  <div style={st1}>
                    <b>Overload:</b>
                    {statusArr.overload ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                  <div style={st1}>
                    <b>Overcurrent:</b>
                    {statusArr.overcurrent ? <i>&#10003;</i> : <i> &#10060;</i>}
                  </div>
                </div>
              </div>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VehicleStatus;