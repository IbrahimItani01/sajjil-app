"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { priorityOrder } from "@/lib/constants/main";

const Page = () => {
	const today = new Date().toISOString().split("T")[0];

	const tasks = useSelector((state: RootState) => state.tasks);

	const todayTasks = tasks.filter((task) => task.date.split("T")[0] === today);

	const sortedTodayTasks = todayTasks
		.slice()
		.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

	return (
		<div className='flex flex-col gap-3'>
			{sortedTodayTasks.length > 0 ? (
				sortedTodayTasks.map((task) => (
					<TaskCard
						key={task.id}
						{...task}
					/>
				))
			) : (
				<p className='text-gray-500 text-center'>No tasks for today.</p>
			)}
		</div>
	);
};

export default Page;
