"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Page = () => {
	const today = new Date().toISOString().split("T")[0];

	const tasks = useSelector((state: RootState) => state.tasks);

	const todayTasks = tasks
		.filter((task) => task.date === today)
		.sort((a, b) => {
			const priorityOrder = { "!!!": 3, "!!": 2, "!": 1 };
			return priorityOrder[b.priority] - priorityOrder[a.priority];
		});

	return (
		<div className='flex flex-col gap-3'>
			{todayTasks.length > 0 ? (
				todayTasks.map((task, index) => (
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
				<p className='text-gray-500 text-center'>No tasks for today.</p>
			)}
		</div>
	);
};

export default Page;
