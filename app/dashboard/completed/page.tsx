"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Page = () => {
	const tasks = useSelector((state: RootState) => state.tasks);

	const completedTasks = tasks.filter((task) => task.completed);

	const sortedCompletedTasks = completedTasks.slice().sort((a, b) => {
		const dateComparison =
			new Date(a.date).getTime() - new Date(b.date).getTime();
		if (dateComparison !== 0) return dateComparison;

		const priorityOrder = { "!!!": 3, "!!": 2, "!": 1 };
		return priorityOrder[a.priority] - priorityOrder[b.priority];
	});

	return (
		<div className='flex flex-col gap-3'>
			{sortedCompletedTasks.length > 0 ? (
				sortedCompletedTasks.map((task, index) => (
					<TaskCard
						key={index}
						title={task.title}
						description={task.description}
						priority={task.priority}
						date={task.date}
						completed={task.completed}
					/>
				))
			) : (
				<p className='text-gray-500 text-center'>No completed tasks.</p>
			)}
		</div>
	);
};

export default Page;
