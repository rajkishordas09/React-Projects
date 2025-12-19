import { createSlice } from "@reduxjs/toolkit";

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

export const privacyActions = privacySlice.actions
export default privacySlice;