import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
function DefaultLayout() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Outlet />
			</div>
		</div>
	);
}

export default DefaultLayout;
