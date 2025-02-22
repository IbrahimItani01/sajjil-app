import React from "react";
interface FormFooterProps {
	isLogin: boolean;
	handleSwitch: () => void;
}
const FormFooter = ({ handleSwitch, isLogin }: FormFooterProps) => {
	return (
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
	);
};

export default FormFooter;
