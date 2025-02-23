import { AuthForm } from "@/lib/interfaces/auth.interfaces";
import axios from "axios";
import { API_URL } from "../main";

export const registerUser = async ({ name, email, password }: AuthForm) => {
	try {
		const response = await axios.post(`${API_URL}/auth/register`, {
			name,
			email,
			password,
		});

		return response.data;
	} catch (error) {
		console.error("Registration Error:", error);
		throw error;
	}
};

export const loginUser = async ({ email, password }: AuthForm) => {
	try {
		const response = await axios.post(`${API_URL}/auth/login`, {
			email,
			password,
		});

		return response.data;
	} catch (error) {
		console.error("Registration Error:", error);
		throw error;
	}
};
