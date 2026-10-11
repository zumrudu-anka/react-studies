import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { drumMachineReducer } from "./reducers/drumMachineReducer";

// const rootReducer = combineReducers({
//     drumMachineReducer
// })

export const store = configureStore({
    reducer : {
        drumMachine : drumMachineReducer
    }
});