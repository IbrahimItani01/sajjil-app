import { AuthForm } from "../interfaces/auth.interfaces";

export const isValidEmail = (email: string) => {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
type valiateFormParams = {
	isLogin: boolean;
	form: AuthForm;
	setError: (error: string) => void;
};
export const validateForm = ({
	isLogin,
	form,
	setError,
}: valiateFormParams) => {
	if (
		!form.email ||
		!form.password ||
		(!isLogin && (!form.name || !form.confirmPassword))
	) {
		setError("All fields are required.");
		return false;
	}

	if (!isValidEmail(form.email)) {
		setError("Invalid email format.");
		return false;
	}

	if (!isLogin && form.password !== form.confirmPassword) {
		setError("Passwords do not match.");
		return false;
	}
    return true;
	setError("");
};