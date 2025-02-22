import React, { useEffect } from "react";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
	message: string;
	onClose: () => void;
}

const ErrorMessage = ({ message, onClose }: ErrorMessageProps) => {
	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				onClose();
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [message, onClose]);

	if (!message) return null;

	return (
		<div className='fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg animate-fadeIn'>
			<AlertCircle size={18} />
			<span className='text-sm'>{message}</span>
			<button
				className='ml-2 text-lg'
				onClick={onClose}
			>
				&times;
			</button>
		</div>
	);
};

export default ErrorMessage;
