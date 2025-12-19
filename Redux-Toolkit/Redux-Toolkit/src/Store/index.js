import { configureStore, createSlice } from '@reduxjs/toolkit';

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


const privacySlice = createSlice({
    name: "privacy",
    initialState: true,
    reducers: {
        togglePrivacy: (state) => {

            return !state;
            //  


        }
    }
})

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer

    }
})

export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions
export default counterStore;