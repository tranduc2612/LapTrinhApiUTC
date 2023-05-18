import React, { Fragment, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import DefaultLayout from "../src/layout/Defaultlayout/index";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Post from "./pages/Post/Post";
import CreatePost from "./pages/CreatePost/CreatePost";
import Register from "./pages/Register/Register";
import SidebarLayout from "./layout/SidebarLayout/index";
import DetailPost from "./pages/DetailPost/DetailPost";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";

function App() {
	const user = useSelector((state) => {
		return state.users.currentUser;
	});

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<DefaultLayout />}>
						<Route path="/" element={<Home />} />
						{user ? (
							<Route path="*" element={<Navigate to="/" />} />
						) : (
							<Route path="/login" element={<Login />} />
						)}
					</Route>

					<Route path="/" element={<SidebarLayout />}>
						<Route path="/detail-post" element={<DetailPost />} />
					</Route>

					{user ? (
						<Route path="/" element={<DefaultLayout />}>
							<Route path="/create-post" element={<CreatePost />} />
							<Route path="/your-post" element={<Post />} />
						</Route>
					) : (
						<Route path="*" element={<Navigate to="/login" />} />
					)}

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
