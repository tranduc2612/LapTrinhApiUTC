import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogsSlice";
import userReducer from "./users/usersSlice";

export const store = configureStore({
	reducer: {
		blogs: blogReducer,
		users: userReducer,
	},
});
