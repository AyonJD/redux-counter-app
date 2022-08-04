import { createStore } from "redux";
import counterReducer from "./Source/counterReducer";

const store = createStore(counterReducer)
export default store;