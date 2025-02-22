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
		<div className='w-full h-[100vh] flex items-center justify-center'>
			<div className='w-[50%] mx-auto flex flex-col gap-10 border border-accent rounded-3xl p-5'>
				<div className='flex flex-col items-center gap-2'>
					<Image
						src='./logo.svg'
						alt='logo'
						width={100}
						height={100}
					/>
					<h1 className='text-h2 font-poppins font-semibold'>
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
				<div className='w-fit mx-auto'>
					<ActionButton title={isLogin ? "Login" : "Register"} />
				</div>
				<div className='w-fit mx-auto text-sm font-inter'>
					<p>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
						<span
							className='underline font-medium hover:text-accent cursor-pointer'
							onClick={handleSwitch}
						>
							{isLogin ? " Register" : " Login"}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;
