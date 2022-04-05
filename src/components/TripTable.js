import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import data from "./context";

const TripTable = () => {
  // const rows = useContext(data);
  const rows =[{
    id:1,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },
  {
    id: 2,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 3,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 4,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 5,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 6,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 7,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 8,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },{
    id: 9,
    startTime: "May 26,5:18 pm",
    duration: "24 min",
    maxSpeed: "91 kmph",
    avgSpeed: "54 kmph",
    startingVoltage: "70.04 V",
    endingVoltage: "69.42 V",
    distance: "5.45 km",
    driverScore: "98.5",
  },]
  // const rows =rowsd.vehicle1
  console.log(rows); //,rowsd);
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Start Time</b>
              </TableCell>
              <TableCell align="right">
                <b>Duration</b>
              </TableCell>
              <TableCell align="right">
                <b>Max Speed</b>
              </TableCell>
              <TableCell align="right">
                <b>Average Speed</b>
              </TableCell>
              <TableCell align="right">
                <b>Starting Voltage</b>
              </TableCell>
              <TableCell align="right">
                <b>Ending Voltage</b>
              </TableCell>
              <TableCell align="right">
                <b>Distance</b>
              </TableCell>
              <TableCell align="right">
                <b>Driver Score</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.startTime}
                </TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.maxSpeed}</TableCell>
                <TableCell align="right">{row.avgSpeed}</TableCell>
                <TableCell align="right">{row.startingVoltage}</TableCell>
                <TableCell align="right">{row.endingVoltage}</TableCell>
                <TableCell align="right">{row.distance}</TableCell>
                <TableCell align="right">{row.driverScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TripTable;
