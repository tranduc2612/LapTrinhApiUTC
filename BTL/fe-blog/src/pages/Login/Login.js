import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import "./Login.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { loginUser } from "services/usersServices";
import { useNavigate } from "react-router-dom";

function Login() {
	const SignupSchema = Yup.object().shape({
		username: Yup.string()
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		password: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const user = useSelector((state) => state.users);
	return (
		<div className="form__login d-flex flex-column justify-content-center">
			<h1 className="text-center mb-5">Login</h1>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={async (values) => {
					//cách sử dụng promise
					// dispatch(loginUser(values)).then(({ payload }) => {
					// 	Navigate(payload.user !== undefined ? "/home" : "/login");
					// });
					// dispatch(loginUser(values)).then(({ payload }) => {});
					// console.log(user);

					const result = await dispatch(loginUser(values));
					const currentUser = unwrapResult(result);
					if (currentUser.user) {
						navigate("/");
					} else {
						navigate("/login");
					}
				}}
				validationSchema={SignupSchema}
			>
				{({ errors, touched }) => (
					<Form className="d-flex flex-column">
						<label htmlFor="account">Account</label>
						<Field
							className={errors.account ? "form-control error" : "form-control"}
							id="username"
							name="username"
							placeholder="Please enter your account"
							type="text"
						/>
						{errors.username && touched.username ? (
							<div className="mb-4">{errors.username}</div>
						) : null}

						<label htmlFor="password">Password</label>
						<Field
							className={
								errors.password ? "form-control error" : "form-control"
							}
							id="password"
							name="password"
							placeholder="Please enter your password"
							type="password"
						/>
						{errors.password && touched.password ? (
							<div className="mb-4">{errors.password}</div>
						) : null}

						<button className="btn btn_login mt-5" type="submit">
							Login
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Login;
