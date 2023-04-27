import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    probka: "Hello",
}

const probkaSlice = createSlice({
    name: 'probkaSlice',
    initialState:initialState,
    reducers : {},
    extraReducers: {},
})

export default probkaSlice.reducer