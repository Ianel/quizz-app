import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    initialState: 0,
    name: "score",
    reducers: {
        countPoints: (state, action) => (state += parseInt(action.payload)),
        resetScore: () => 0,
    },
});

export const { countPoints, resetScore } = answerSlice.actions;
export default answerSlice.reducer;
