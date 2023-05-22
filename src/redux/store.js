import { configureStore } from "@reduxjs/toolkit";
import { profileReducer, subscriptionReducer, userReducer } from "./reducers/userReducer";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from './reducers/otherReducer';

export const server = "https://odd-plum-coyote-tutu.cyclic.app";

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
