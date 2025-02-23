import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

const CustomInput = ({ label, type, className, ...rest }: CustomInputProps) => {
	const [visible, setVisible] = useState(false);
	const isPassword = type === "password";

	return (
		<div className='flex flex-col gap-1 relative'>
			{label && <label className='font-inter text-sm'>{label}</label>}
			<div className='relative'>
				<input
					className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-black font-inter w-full pr-10 ${className}`}
					type={isPassword ? (visible ? "text" : "password") : type}
					{...rest}
				/>
				{isPassword && (
					<button
						type='button'
						className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
						onClick={() => setVisible(!visible)}
					>
						{visible ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				)}
			</div>
		</div>
	);
};

export default CustomInput;
