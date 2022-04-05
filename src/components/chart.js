import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

const LineChart = () => {
  const st1 ={
    backgroundColor:"#3A3845",
    color:"#EEEDDE",
    padding:"10px",
    borderRadius:"5px",
  }
  const st2 ={
    backgroundColor:"#EEEDDE",
    color:"#3A3845",
    padding:"10px",
    borderRadius:"5px",
  }
  const data = [
    { x: 0, y: 20 },
    { x: 1, y: 30 },
    { x: 2, y: 40 },
    { x: 3, y: 10 },
    { x: 4, y: 30 },
    { x: 5, y: 20 },
    { x: 6, y: 30 },
    { x: 7, y: 40 },
    { x: 8, y: 10 },
    { x: 9, y: 30 },
    { x: 10, y: 20 },
    { x: 11, y: 30 },
    { x: 12, y: 40 },
    { x: 13, y: 10 },
    { x: 14, y: 30 },
    { x: 15, y: 20 },
    { x: 16, y: 30 },
    { x: 17, y: 40 },
    { x: 18, y: 10 },
    { x: 19, y: 30 },
  ];
  return (
    <div style={{
      marginTop:"50px",
    }}><h4><b style={{paddingLeft:"30px"}}>Statistics</b>&nbsp;<i style={st1}>&nbsp;Bookings</i>&nbsp;<i style={st2}>&nbsp;Earnings</i></h4>
    <div className="chart">
     <Paper >
         <Chart data={data}
           width={"30%"}
           height={"200"}>
         <ArgumentAxis/>
         <ValueAxis/>
         <LineSeries valueField="y" argumentField="x"/>
         </Chart>
     </Paper>
     </div>
    </div>
  );
};

export default LineChart;
