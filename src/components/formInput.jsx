import React, { useState } from "react";
import "./formInput.css";

function FormInputs(props) {
	const [focused, setFocused] = useState(false);
	const { label, onChange, id, errormessage, ...inputProps } = props;
	const handleFocus = (e) => {
		setFocused(true);
	};
	return (
		<div className="formInput">
			{/* <label>{label}</label> */}
			<input
				{...inputProps}
				onChange={onChange}
				id={id}
				onBlur={handleFocus}
				onFocus={() => {
					inputProps.name === "confirmPassword" && setFocused(true);
				}}
				focused={focused.toString()}
			/>
			<span>{errormessage}</span>
		</div>
	);
}

export default FormInputs;
