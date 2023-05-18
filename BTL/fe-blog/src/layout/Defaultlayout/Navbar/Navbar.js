import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const currentUser = useSelector((state) => state.users.currentUser);
	const navigate = useNavigate();
	function LogOut() {
		localStorage.clear();
		navigate("/login");
	}
	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
			<button
				className="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarsExampleDefault"
				aria-controls="navbarsExampleDefault"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src="assets/img/logo.png" alt="logo" />
				</Link>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/your-post">
								Post
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/create-post">
								CreatePost
							</Link>
						</li>
						{currentUser ? (
							<li className="nav-item user" style={{ position: "relative" }}>
								<Link to="/profile" className="d-flex align-items-center">
									<span style={{ marginRight: "10px" }}>
										{currentUser.username}
									</span>
									<img
										className="author-thumb"
										src={currentUser.avatar}
										alt="Sal"
									/>
								</Link>

								<div className="user-action">
									<ul>
										<li>
											<Link to="/profile" className="d-flex align-items-center">
												Profile
											</Link>
										</li>
										<li onClick={LogOut}>Log Out</li>
									</ul>
								</div>
							</li>
						) : (
							<Fragment>
								<li className="nav-item">
									<Link className="nav-link" to="/login">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/register">
										Register
									</Link>
								</li>
							</Fragment>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
