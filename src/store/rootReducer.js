import { combineReducers } from "@reduxjs/toolkit";
import answerReducer from "./slice/answerSlice";
import topicReducer from "./slice/topicSlice";
import levelSlice from "./slice/levelSlice";

export const rootReducer = combineReducers({
    score: answerReducer,
    topic: topicReducer,
    level: levelSlice,
});
