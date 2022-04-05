import { createContext, useState } from "react";

export const conData = createContext();

export const DataContext = (props) => {
  const [vehicle, addV] = useState([
    {id:1,name:"vehicle1",type:"two-wheller",info:"done"},
    {id:2,name:"vehicle2",type:"three-wheller",info:"undone"},
    {id:3,name:"vehicle3",type:"four-wheller",info:"done"},
    {id:4,name:"vehicle4",type:"three-wheller",info:"done"},
    {id:5,name:"vehicle5",type:"two-wheller",info:"undone"},
    {id:6,name:"vehicle6",type:"four-wheller",info:"done"},
    {id:7,name:"vehicle7",type:"two-wheller",info:"undone"},
    {id:8,name:"vehicle8",type:"four-wheller",info:"done"},
  ]);
  
 
  return (
    <conData.Provider value={[vehicle, addV]}>
      {props.children}
    </conData.Provider>
  );
};

