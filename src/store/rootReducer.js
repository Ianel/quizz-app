import { combineReducers } from "@reduxjs/toolkit";
import answerReducer from "./slice/answerSlice";
import topicReducer from "./slice/topicSlice";

export const rootReducer = combineReducers({
    score: answerReducer,
    topic: topicReducer,
});
