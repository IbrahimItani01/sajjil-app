"use client";

import { useState } from "react";
import { Flag, FlagOff, Pencil, Trash2, CheckCircle } from "lucide-react";
import { formatDate } from "@/lib/utils";

const TaskCard = ({
	title,
	description,
	priority,
	date,
	completed,
}: {
	title: string;
	description: string;
	priority: string;
	date: string;
	completed: boolean;
}) => {
	// State for flag (priority)
	const [isFlagged, setIsFlagged] = useState(false);

	// Priority Styles
	const priorityStyles: { [key: string]: string } = {
		"!": "text-green-500 text-2xl font-extrabold",
		"!!": "text-yellow-500 text-2xl font-extrabold",
		"!!!": "text-red-500 text-2xl font-extrabold",
	};

	return (
		<div
			className={`p-4 rounded-xl shadow-md w-full transition ${
				completed ? "bg-blue-100" : "bg-blue-300"
			}`}
		>
			<div className='flex justify-between items-start'>
				{/* Priority + Title */}
				<div className='flex items-center gap-2'>
					<span
						className={`${
							priorityStyles[priority] || "text-gray-700 text-xl font-bold"
						}`}
					>
						{priority}
					</span>
					<div>
						<h3 className='font-bold text-lg'>{title}</h3>
						<p className='text-sm text-gray-600'>{formatDate(date)}</p>
					</div>
				</div>

				{/* Show Flag button if NOT completed, else show CheckCircle */}
				{completed ? (
					<CheckCircle className='text-green-500' />
				) : (
					<button
						onClick={() => setIsFlagged(!isFlagged)}
						className={`transition ${
							isFlagged ? "text-red-500" : "text-gray-700"
						}`}
					>
						{isFlagged ? <Flag fill='currentColor' /> : <FlagOff />}
					</button>
				)}
			</div>

			{/* Description */}
			<div className='mt-2 text-sm text-gray-700'>{description}</div>

			{/* Action Buttons */}
			<div className='flex justify-end space-x-3 mt-2'>
				{!completed && (
					<button className='text-gray-700 hover:text-blue-500 transition'>
						<Pencil />
					</button>
				)}
				<button className='text-gray-700 hover:text-red-500 transition'>
					<Trash2 />
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
