"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Page = () => {
	const tasks = useSelector((state: RootState) => state.tasks);

	// Define priority order for sorting
	const priorityOrder: Record<"HIGH" | "MEDIUM" | "LOW", number> = {
		HIGH: 3,
		MEDIUM: 2,
		LOW: 1,
	};

	// Sort tasks by date first, then by priority (higher first)
	const sortedTasks = tasks.slice().sort((a, b) => {
		const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
		if (dateComparison !== 0) return dateComparison;
		return priorityOrder[b.priority] - priorityOrder[a.priority];
	});

	return (
		<div className='flex flex-col gap-3'>
			{sortedTasks.map((task) => (
				<TaskCard key={task.id} {...task} />
			))}
		</div>
	);
};

export default Page;
