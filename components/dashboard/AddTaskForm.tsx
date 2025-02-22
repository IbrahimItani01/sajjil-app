"use client";
import { XCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import CustomInput from "../base/CustomInput";
import ActionButton from "../base/ActionButton";
import PrioritySelector from "./base/PrioritySelector";

interface AddTaskFormProps {
	toggleAddTask: () => void;
	initialTask?: {
		title: string;
		description: string;
		priority: "!!!" | "!!" | "!";
		date: string;
	}; // Optional for editing
	onSave: (task: {
		title: string;
		description: string;
		priority: "!!!" | "!!" | "!";
		date: string;
	}) => void;
}

const AddTaskForm = ({
	toggleAddTask,
	initialTask,
	onSave,
}: AddTaskFormProps) => {
	const [taskForm, setTaskForm] = useState({
		title: "",
		description: "",
		date: "",
		priority: "!",
	});

	// Load initialTask into state if editing
	useEffect(() => {
		if (initialTask) {
			setTaskForm(initialTask);
		}
	}, [initialTask]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTaskForm((prev) => ({ ...prev, [name]: value }));
	};

	const handlePriorityChange = (priority: string) => {
		setTaskForm((prev) => ({ ...prev, priority }));
	};

	const handleSubmit = () => {
		onSave({
			...taskForm,
			priority: taskForm.priority as "!!!" | "!!" | "!", // Ensure correct type
		});
		toggleAddTask(); // Close modal
	};

	return (
		
	);
};

export default AddTaskForm;
