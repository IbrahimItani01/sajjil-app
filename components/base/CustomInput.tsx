import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

const CustomInput = ({
	label,
	error,
	className,
	...rest
}: CustomInputProps) => {};

export default CustomInput;
