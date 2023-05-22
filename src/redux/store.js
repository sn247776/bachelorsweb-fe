import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from './reducers/otherReducer';

export const server = "http://localhost:5000/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    other: otherReducer,
  },
});

export default store;
