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

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] h-auto flex flex-col gap-6 border border-accent rounded-3xl bg-white overflow-hidden p-6 sm:p-8'>
				<div className='flex flex-col items-center gap-3'>
					<Image
						src='/logo.svg'
						alt='logo'
						width={80}
						height={80}
					/>
					<h1 className='text-h3 font-poppins font-semibold text-center sm:text-h3'>
						{isLogin ? "Welcome Back!" : "Create an Account"}
					</h1>
				</div>

				<div className='flex flex-col gap-4'>
					{!isLogin && (
						<CustomInput
							type='text'
							label='Name'
							name='name'
							placeholder='John Doe'
							value={form.name}
							onChange={handleChange}
						/>
					)}
					<CustomInput
						type='email'
						label='Email'
						name='email'
						placeholder='example@domain.com'
						value={form.email}
						onChange={handleChange}
					/>
					<div className='flex gap-4 flex-col'>
						<CustomInput
							type='password'
							label='Password'
							name='password'
							placeholder='********'
							value={form.password}
							onChange={handleChange}
						/>
						{!isLogin && (
							<CustomInput
								type='password'
								label='Confirm Password'
								name='confirmPassword'
								placeholder='********'
								value={form.confirmPassword}
								onChange={handleChange}
							/>
						)}
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<ActionButton title={isLogin ? "Login" : "Register"} />
				</div>

				<div className='w-full text-text text-center text-sm font-inter'>
					<p>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
						<span
							className='underline font-medium hover:text-accent cursor-pointer ml-1'
							onClick={handleSwitch}
						>
							{isLogin ? "Register" : "Login"}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
