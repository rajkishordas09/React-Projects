import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({ //this is slice of counter
    name: "counter",
    initialState: { counterVal: 0 }, // initial state of this slice
    reducers: {

        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;  //bydefault returns state
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload.num)
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload.num)
        }

    }
})
export const counterActions = counterSlice.actions;
export default counterSlice;