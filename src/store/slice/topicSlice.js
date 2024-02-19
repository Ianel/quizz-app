import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    initialState: "",
    name: "topic",
    reducers: {
        selectTopic: (state, action) => (state = action.payload.toString()),
        resetState: () => "",
    },
});

export const { selectTopic, resetState } = topicSlice.actions;
export default topicSlice.reducer;
