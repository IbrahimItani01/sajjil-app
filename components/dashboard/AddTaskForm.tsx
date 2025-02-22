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
					label='Title'
					type='text'
					placeholder='Task title'
					name='title'
					value={taskForm.title}
					onChange={handleChange}
				/>

				<CustomInput
					label='Description'
					type='text'
					placeholder='Buy eggs'
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
