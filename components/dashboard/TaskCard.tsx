"use client";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteTask as deleteTaskRedux,
	toggleTask as toggleTaskRedux,
	updateTask as updateTaskRedux,
} from "@/redux/slices/tasks.slice";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { RootState } from "@/redux/store";
import { deleteTask, updateTask } from "@/apis/tasks/tasks.route";

// Helper Function: Format Date (DD/MM/YYYY)
const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
		.toString()
		.padStart(2, "0")}/${date.getFullYear()}`;
};

const TaskCard = ({
	id,
	description,
	priority,
	date,
	completed,
}: {
	id: string;
	description: string;
	priority: "HIGH" | "MEDIUM" | "LOW";
	date: string;
	completed: boolean;
}) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const tasks = useSelector((state: RootState) => state.tasks);
	const token = localStorage.token; // Get token

	// Priority Symbols Mapping
	const prioritySymbols: Record<"HIGH" | "MEDIUM" | "LOW", string> = {
		HIGH: "!!!",
		MEDIUM: "!!",
		LOW: "!",
	};

	// Priority Styles
	const priorityStyles: Record<"HIGH" | "MEDIUM" | "LOW", string> = {
		HIGH: "text-red-500 text-2xl font-extrabold",
		MEDIUM: "text-yellow-500 text-2xl font-extrabold",
		LOW: "text-green-500 text-2xl font-extrabold",
	};

	// Handle Task Deletion
	const handleDelete = async (e: React.MouseEvent) => {
		e.stopPropagation();
		try {
			await deleteTask(id, token); // Call API to delete task
			dispatch(deleteTaskRedux(id)); // Update Redux state
		} catch (error) {
			console.error("Failed to delete task:", error);
		}
	};

	// Handle Task Completion Toggle
	const handleToggle = async () => {
		const updatedCompletedStatus = !completed; // Toggle completed status
		try {
			await updateTask(id, { completed: updatedCompletedStatus }, token); // Call API to update task
			dispatch(toggleTaskRedux(id)); // Update Redux state
		} catch (error) {
			console.error("Failed to toggle task completion:", error);
		}
	};

	// Handle Edit Task
	const handleEdit = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsEditing(true);
	};

	// Handle Save Edit
	const handleSaveEdit = async (updatedTask: {
		description: string;
		priority: "HIGH" | "MEDIUM" | "LOW";
		date: string;
	}) => {
		try {
			const updatedTaskData = await updateTask(
				id,
				{ ...updatedTask, completed },
				token
			);
			dispatch(updateTaskRedux(updatedTaskData)); // Update Redux state
			setIsEditing(false);
		} catch (error) {
			console.error("Failed to update task:", error);
		}
	};

	return (
		<>
			{/* Edit Form Display */}
			{isEditing && (
				<AddTaskForm
					toggleAddTask={() => setIsEditing(false)}
					initialTask={{ id, description, priority, date, completed }}
					onSave={handleSaveEdit}
				/>
			)}

			{/* Task Card */}
			<div
				onClick={handleToggle}
				className={`p-4 rounded-xl shadow-md w-full transition cursor-pointer ${
					completed ? "bg-blue-100" : "bg-blue-300"
				}`}
			>
				{/* Task Description */}
				<div className='text-sm text-gray-700'>{description}</div>

				{/* Priority & Date */}
				<div className='mt-2 flex justify-between items-center'>
					{/* Priority Indicator */}
					<span className={priorityStyles[priority]}>
						{prioritySymbols[priority]}
					</span>

					{/* Date Display */}
					<p className='text-sm text-gray-600'>{formatDate(date)}</p>
				</div>

				{/* Completed Indicator */}
				{completed && <CheckCircle className='text-green-500 mt-2' />}

				{/* Action Buttons */}
				<div className='flex justify-end space-x-3 mt-2'>
					{/* Edit Button (Disabled if task is completed) */}
					{!completed && (
						<button
							onClick={handleEdit}
							className='text-gray-700 hover:text-blue-500 transition'
						>
							<Pencil />
						</button>
					)}

					{/* Delete Button */}
					<button
						onClick={handleDelete}
						className='text-gray-700 hover:text-red-500 transition'
					>
						<Trash2 />
					</button>
				</div>
			</div>
		</>
	);
};

export default TaskCard;
