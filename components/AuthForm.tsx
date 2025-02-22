"use client";
import React, { useState } from "react";
import ActionButton from "./base/ActionButton";
import ErrorMessage from "./base/ErrorMessage";
import { validateForm } from "@/lib/utils/auth.utils";
import FormFooter from "./auth/FormFooter";
import FormHeader from "./auth/FormHeader";
import FormBody from "./auth/FormBody";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [error, setError] = useState("");
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
		setError("");
	};

	const handleSubmit = () => {
		if (!validateForm({ isLogin, form, setError })) return;
		setForm({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		// TODO: Handle api call
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<ErrorMessage
				message={error}
				onClose={() => setError("")}
			/>

			<div className='w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] h-auto flex flex-col gap-6 border border-accent rounded-3xl bg-white overflow-hidden px-5 py-3 '>
				<FormHeader isLogin={isLogin} />

				<FormBody
					form={form}
					handleChange={handleChange}
					isLogin={isLogin}
				/>

				<div className='w-full flex justify-center'>
					<ActionButton
						title={isLogin ? "Login" : "Register"}
						onPress={handleSubmit}
					/>
				</div>

				<FormFooter
					handleSwitch={handleSwitch}
					isLogin={isLogin}
				/>
			</div>
		</div>
	);
};

export default AuthForm;
