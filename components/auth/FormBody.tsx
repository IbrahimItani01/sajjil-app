import React from "react";
import CustomInput from "../base/CustomInput";
import { AuthForm } from "@/lib/interfaces/auth.interfaces";

interface FormBodyProps {
	isLogin: boolean;
	form: AuthForm;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormBody = ({ form, handleChange, isLogin }: FormBodyProps) => {
	return (
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
	);
};

export default FormBody;
