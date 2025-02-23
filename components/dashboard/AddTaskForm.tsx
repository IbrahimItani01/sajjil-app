"use client";
import { XCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import CustomInput from "../base/CustomInput";
import ActionButton from "../base/ActionButton";
import PrioritySelector from "./base/PrioritySelector";
import { createTask } from "@/apis/tasks/tasks.route"; // Import your createTask API function
import { updateTask } from "@/apis/tasks/tasks.route"; // Import your updateTask API function

interface AddTaskFormProps {
	toggleAddTask: () => void;
	initialTask?: {
		id: string;
		description: string;
		priority: "!" | "!!" | "!!!"; // Ensure priority is correctly typed
		date: string;
		completed: boolean;
	};
	onSave: (task: {
		id: string;
		description: string;
		priority: "HIGH" | "MEDIUM" | "LOW"; // Changed to match API
		date: string;
		completed: boolean;
	}) => void;
}

const AddTaskForm = ({
	toggleAddTask,
	initialTask,
	onSave,
}: AddTaskFormProps) => {
	const [taskForm, setTaskForm] = useState<{
		id?: string;
		description: string;
		date: string;
		priority: "!" | "!!" | "!!!"; // Correctly type priority here
		completed: boolean;
	}>({
		id: "", // Task ID (empty when creating new task)
		description: "",
		date: "",
		priority: "!", // Default priority to !
		completed: false, // Default to not completed
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

	const handlePriorityChange = (priority: "!" | "!!" | "!!!") => {
		setTaskForm((prev) => ({ ...prev, priority }));
	};

	// Map UI priority to API format
	const mapPriorityToAPI = (
		priority: "!" | "!!" | "!!!"
	): "HIGH" | "MEDIUM" | "LOW" => {
		switch (priority) {
			case "!!!":
				return "HIGH";
			case "!!":
				return "MEDIUM";
			case "!":
				return "LOW";
			default:
				return "LOW"; // Default if not mapped correctly
		}
	};

	const handleSubmit = async () => {
		const token = localStorage.token;
		try {
			// Exclude id when creating a new task
			const { id, ...taskData } = taskForm;

			// Convert date to ISO-8601 format
			const formattedDate = new Date(taskData.date).toISOString();

			const formattedTaskData = {
				...taskData,
				date: formattedDate, // Set the correctly formatted date
				priority: mapPriorityToAPI(taskForm.priority),
			};

			if (initialTask) {
				// Editing an existing task
				const updatedTask = await updateTask(
					initialTask.id,
					formattedTaskData,
					token
				);
				onSave(updatedTask);
			} else {
				// Creating a new task (remove id explicitly)
				const { id: _, ...taskWithoutId } = formattedTaskData;
				const newTask = await createTask(taskWithoutId, token);
				onSave(newTask);
			}

			// Close the modal
			toggleAddTask();
		} catch (error) {
			console.error("Error while submitting the task:", error);
		}
	};

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
			<div className='p-6 border-2 border-accent bg-white rounded-2xl relative w-96'>
				<button
					className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
					onClick={toggleAddTask}
				>
					<XCircle size={24} />
				</button>

				<h2 className='text-xl font-semibold mb-4'>
					{initialTask ? "Edit Task" : "Add New Task"}
				</h2>

				<CustomInput
					label='Description'
					type='text'
					placeholder='Task description'
					name='description'
					value={taskForm.description}
					onChange={handleChange}
				/>

				<div className='mt-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Date
					</label>
					<input
						type='date'
						name='date'
						value={taskForm.date}
						onChange={handleChange}
						className='mt-1 p-2 border rounded w-full'
					/>
				</div>

				<PrioritySelector
					value={taskForm.priority}
					onChange={handlePriorityChange}
				/>

				<div className='mt-6 w-fit mx-auto'>
					<ActionButton
						title={initialTask ? "Save Changes" : "Add Task"}
						onPress={handleSubmit}
					/>
				</div>
			</div>
		</div>
	);
};

export default AddTaskForm;
