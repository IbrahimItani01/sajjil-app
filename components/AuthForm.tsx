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
import { loginUser, registerUser } from "@/apis/auth/auth.route";
import { useRouter } from "next/navigation";
import { getTasks } from "@/apis/tasks/tasks.route";
import { addTask, resetTasks, Task } from "@/redux/slices/tasks.slice";

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
	const router = useRouter();

	// Handle form field changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Switch between login and register forms
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

	// Handle form submission (login or register)
	const handleSubmit = async () => {
		if (!validateForm({ isLogin, form, setError })) return;

		try {
			let message, name, token;

			// Handle registration or login
			if (!isLogin) {
				({ message, name, token } = await registerUser(form));
			} else {
				({ message, name, token } = await loginUser(form));
			}

			// Store the token in localStorage
			localStorage.setItem("token", token);

			// Dispatch login action
			dispatch(
				login({
					user: {
						username: name,
					},
					token,
				})
			);

			// Fetch tasks after successful login/registration
			const tasks = await getTasks(token);

			// Dispatch tasks to Redux store
			dispatch(resetTasks());

			tasks.forEach((task: Task) => {
				dispatch(addTask(task));
			});

			console.log(message);

			router.push("/dashboard");
		} catch (error: unknown) {
			setError(error.response?.data?.message || "Something went wrong");
		}

		setForm({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<ErrorMessage
				message={error}
				onClose={() => setError("")}
			/>

			<div className='w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] h-auto flex flex-col gap-6 border border-accent rounded-3xl bg-white overflow-hidden px-5 py-3'>
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
