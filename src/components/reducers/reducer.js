const init = [
    "vehicle1",
    "vehicle2",
    "vehicle3",
    "vehicle4",
    "vehicle5",
    "vehicle6",
    "vehicle7",
    "vehicle8",
];

const updateFun =( state = init, action )=>{
    switch(action.type){
        case "UPDATE":
            return [...state, action.payload];

        default:
            return state;
    }
}

export default updateFun