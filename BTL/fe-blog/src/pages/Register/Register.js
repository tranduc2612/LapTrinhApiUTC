import React from "react";
import { Formik, Field, Form } from "formik";
import "./register.css";
import * as Yup from "yup";

function Register() {
	const SignupSchema = Yup.object().shape({
		username: Yup.string()
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		password: Yup.string()
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		password2: Yup.string()
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
	});

	return (
		<div className="form__login d-flex flex-column justify-content-center">
			<h1 className="text-center mb-5">Register</h1>
			<Formik
				initialValues={{
					username: "",
					password: "",
				}}
				onSubmit={(values) => {
					console.log(values);
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

						<label htmlFor="password2">Password Again</label>
						<Field
							className={
								errors.password2 ? "form-control error" : "form-control"
							}
							id="password2"
							name="password2"
							placeholder="Please enter your password again"
							type="password"
						/>
						{errors.password2 && touched.password2 ? (
							<div className="mb-4">{errors.password2}</div>
						) : null}

						<button className="btn btn_register mt-5" type="submit">
							Register
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Register;
