import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
function SidebarLayout({ children }) {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<Sidebar />
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default SidebarLayout;
