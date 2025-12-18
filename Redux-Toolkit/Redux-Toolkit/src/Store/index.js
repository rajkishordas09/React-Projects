import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({ //this is slice of counter
    name: "counter",
    initialState: { counterVal: 0 }, // initial state of this slice
    reducers: {

        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state) => {
            state.counterVal--;
        },
        add: (state, action) => {
            console.log(state, action);
        },
        subtract: (state, action) => {
            console.log(state, action);
        }

    }
})




const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer

    }
})

export const counterActions = counterSlice.actions;
export default counterStore;