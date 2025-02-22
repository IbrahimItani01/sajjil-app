"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomInput from "./base/CustomInput";
import ActionButton from "./base/ActionButton";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSwitch = () => {
		setIsLogin((prev) => !prev);
		setForm({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

export default AuthForm;
