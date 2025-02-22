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
};

export default ErrorMessage;
