"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Page = () => {
	const tasks = useSelector((state: RootState) => state.tasks);

	const sortedTasks = tasks.slice().sort((a, b) => {
		// First, compare by date
		const dateComparison =
			new Date(a.date).getTime() - new Date(b.date).getTime();
		if (dateComparison !== 0) return dateComparison;

		// Then, compare by priority (high to low)
		const priorityOrder = { "!!!": 3, "!!": 2, "!": 1 };
		return priorityOrder[b.priority] - priorityOrder[a.priority]; // Reverse order for descending priority
	});

	return (
		<div className='flex flex-col gap-3'>
			{sortedTasks.map((task, index) => (
				<TaskCard
					key={index}
					title={task.title}
					description={task.description}
					priority={task.priority}
					date={task.date}
					completed={task.completed}
				/>
			))}
		</div>
	);
};

export default Page;
