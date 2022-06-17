import { createSlice } from "@reduxjs/toolkit";

// setup initial destination values

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

// create slice

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        // where it came from
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        // where its going
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        // how long it takes to get there
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    },
});

// exporting each action so the rest of the app can access these methods
export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

// import data from the data layer
// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
// connect to 
export default navSlice.reducer;
