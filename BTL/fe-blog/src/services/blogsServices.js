import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getBlogs = createAsyncThunk("blogs/get", async (data) => {
	const response = await axios.get("http://localhost:8080/blogs", data);
	return response.data;
});



