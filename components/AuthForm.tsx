"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/auth.slice";
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

	const dispatch = useDispatch();

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

	const handleSubmit = async () => {
		if (!validateForm({ isLogin, form, setError })) return;

		setForm({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});

		try {
			if (isLogin) {
				const response = {
					user: { id: "123", username: form.name, email: form.email },
					token: "fake-token",
				};

				dispatch(login({ user: response.user, token: response.token }));
			} else {
				console.log("Registration logic");
			}
		} catch (_) {
			setError("An error occurred. Please try again.");
		}
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
