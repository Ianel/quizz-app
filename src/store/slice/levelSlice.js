import { createSlice } from "@reduxjs/toolkit";

const leveSlice = createSlice({
    initialState: "Level 1",
    name: "level",
    reducers: {
        selectLevel: (state, action) => (state = action.payload),
        resetLevel: () => "",
    },
});

export const { selectLevel, resetLevel } = leveSlice.actions;
export default leveSlice.reducer;
