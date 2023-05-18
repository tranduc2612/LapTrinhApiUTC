import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, register } from "services/usersServices";
const initialState = {
	users: [],
	currentUser: JSON.parse(localStorage.getItem("currentUser")),
	checkLogin: false,
};

const userSlice = createSlice({
	name: "users",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loginUser.fulfilled, (state, { payload }) => {
			if (payload.user) {
				localStorage.setItem("currentUser", JSON.stringify(payload.user));
				localStorage.setItem("token", payload.token);
				localStorage.setItem("userId", payload.user.id);
			}
			state.currentUser = payload.user;
		});
		builder.addCase(register.fulfilled, (state, { payload }) => {
			console.log(state, payload);
		});
		builder.addCase(getUser.fulfilled, (state, { payload }) => {
			console.log(state, payload);
		});
	},
});

export default userSlice.reducer;
