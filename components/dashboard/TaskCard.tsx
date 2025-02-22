"use client";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "@/redux/slices/tasks.slice";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm"; // Import AddTaskForm
import { RootState } from "@/redux/store";

const TaskCard = ({
	title,
	description,
	priority,
	date,
	completed,
}: {
	title: string;
	description: string;
	priority: "!!!" | "!!" | "!";
	date: string;
	completed: boolean;
}) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const tasks = useSelector((state: RootState) => state.tasks); // Access tasks from the store

	// Priority Styles
	const priorityStyles: { [key: string]: string } = {
		"!": "text-green-500 text-2xl font-extrabold",
		"!!": "text-yellow-500 text-2xl font-extrabold",
		"!!!": "text-red-500 text-2xl font-extrabold",
	};

	// Handle Delete
	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent toggling when clicking delete
		dispatch(deleteTask(title));
	};

	// Handle Toggle Completed
	const handleToggle = () => {
		dispatch(toggleTask(title));
	};

	// Handle Edit (Stops event from toggling completion)
	const handleEdit = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsEditing(true);
	};

	// Handle Save Edits
	const handleSaveEdit = (updatedTask: {
		title: string;
		description: string;
		priority: string;
		date: string;
	}) => {
		dispatch(
			updateTask({
				...updatedTask,
				priority: updatedTask.priority as "!!!" | "!!" | "!",
				completed:
					tasks.find((task) => task.title === updatedTask.title)?.completed ??
					false,
				date: updatedTask.date,
				description: updatedTask.description,
				title: updatedTask.title,
			})
		);
		setIsEditing(false);
	};

	return (
		<>
			{/* Show Edit Form if isEditing is true */}
			{isEditing && (
				<AddTaskForm
					toggleAddTask={() => setIsEditing(false)}
					initialTask={{ title, description, priority, date }} // Pass current task data
					onSave={handleSaveEdit} // Handle save logic
				/>
			)}

			{/* Task Card */}
			<div
				onClick={handleToggle}
				className={`p-4 rounded-xl shadow-md w-full transition cursor-pointer ${
					completed ? "bg-blue-100" : "bg-blue-300"
				}`}
			>
				<div className='flex justify-between items-start'>
					{/* Priority + Title */}
					<div className='flex items-center gap-2'>
						<span
							className={
								priorityStyles[priority] || "text-gray-700 text-xl font-bold"
							}
						>
							{priority}
						</span>
						<div>
							<h3 className='font-bold text-lg'>{title}</h3>
							<p className='text-sm text-gray-600'>{formatDate(date)}</p>
						</div>
					</div>

					{/* Show CheckCircle if completed */}
					{completed && <CheckCircle className='text-green-500' />}
				</div>

				{/* Description */}
				<div className='mt-2 text-sm text-gray-700'>{description}</div>

				{/* Action Buttons */}
				{/* Action Buttons */}
				<div className='flex justify-end space-x-3 mt-2'>
					{/* Conditionally render the Edit button if the task is not completed */}
					{!completed && (
						<button
							onClick={handleEdit}
							className='text-gray-700 hover:text-blue-500 transition'
						>
							<Pencil />
						</button>
					)}

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
