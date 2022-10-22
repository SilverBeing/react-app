import React, { useState } from "react";
import "./App.css";
import FormInputs from "./components/formInput";

const App = () => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});

	const inputs = [
		{
			id: 1,
			name: "firstName",
			placeholder: "First Name",
			label: "First Name",
			type: "text",
			pattern: "^[A-Z][a-z]*(?: [A-Z][a-z]*)*$",
			errormessage: "Name must start with a capital Letter",
			required: true,
		},
		{
			id: 2,
			name: "lastName",
			placeholder: "Last Name",
			label: "Last Name",
			type: "text",
			pattern: "^[A-Z][a-z]*(?: [A-Z][a-z]*)*$",
			errormessage: "Name must start with a capital Letter",
			required: true,
		},
		{
			id: 3,
			name: "username",
			placeholder: "Username",
			label: "username",
			type: "text",
			pattern: "^[A-Za-z0-9]*$",
			errormessage:
				"Must be in lowercase and must not contain any special characters",
			required: true,
		},
		{
			id: 4,
			name: "email",
			placeholder: "Email",
			label: "Email Address",
			type: "email",
			errormessage: "Input valid email address",
			pattern:
				"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
			required: true,
		},

		{
			id: 5,
			name: "birthday",
			placeholder: "Birthday",
			label: "Birthday",
			type: "date",
		},
		{
			id: 6,
			name: "password",
			placeholder: "Password",
			label: "Password",
			type: "password",
			pattern:
				"^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
			errormessage:
				"Password must contain a capital letter, a number and a special character.",
			required: true,
		},
		{
			id: 7,
			name: "confirmPassword",
			placeholder: "Confirm Password",
			label: "Confirm Password",
			type: "password",
			pattern: values.password,
			errormessage: "Password must match",
			required: true,
		},
	];
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{inputs.map((input) => {
					return (
						<FormInputs
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					);
				})}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default App;
