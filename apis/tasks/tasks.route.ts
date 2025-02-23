import axios from "axios";
import { API_URL } from "../main";

export type CreateTaskDto = {
	description: string;
	priority: "LOW" | "MEDIUM" | "HIGH";
	date: string;
};
export type UpdateTaskDto = {
	description?: string;
	priority?: "LOW" | "MEDIUM" | "HIGH";
	date?: string;
	completed?: boolean;
};

export const createTask = async (
	createTaskDto: CreateTaskDto,
	token: string
) => {
	try {
		const response = await axios.post(`${API_URL}/tasks`, createTaskDto, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Create Task Error:", error);
		throw error;
	}
};

export const getTasks = async (token: string) => {
	try {
		const response = await axios.get(`${API_URL}/tasks`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Get Tasks Error:", error);
		throw error;
	}
};

export const updateTask = async (
	id: string,
	updateTaskDto: UpdateTaskDto,
	token: string
) => {
	try {
		const response = await axios.patch(
			`${API_URL}/tasks/${id}`,
			updateTaskDto,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error("Update Task Error:", error);
		throw error;
	}
};

export const deleteTask = async (id: string, token: string) => {
	try {
		const response = await axios.delete(`${API_URL}/tasks/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Delete Task Error:", error);
		throw error;
	}
};
