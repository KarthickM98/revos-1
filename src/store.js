import { createStore } from "redux";
import rootreducer from "./components/reducers/rootreducer";
const store = createStore(rootreducer);
export default store;