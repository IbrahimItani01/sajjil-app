import Image from "next/image";
import React from "react";

interface FormHeaderProps {
	isLogin: boolean;
}

const FormHeader = ({ isLogin }: FormHeaderProps) => {
	return (
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
	);
};

export default FormHeader;
