import { createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "../../services/blogsServices.js";

const initialState = {
	blogs: [],
	currentBlog: null,
	blogsUser: [],
};

const blogSlice = createSlice({
	name: "blogs",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getBlogs.fulfilled, (state, { payload }) => {
			state.blogs = payload;
		});
	},
	// extraReducers: {
	// 	[getBlogs.pending]: (state) => {
	// 		state.loading = true;
	// 	},
	// 	[getBlogs.rejected]: (state, { payload }) => {
	// 		state.loading = false;
	// 		state.error = "err";
	// 	},
	// 	[getBlogs.fulfilled]: (state, { payload }) => {
	// 		state.loading = true;
	// 		state.blogs = payload;
	// 	},
	// },
});

export default blogSlice.reducer;
