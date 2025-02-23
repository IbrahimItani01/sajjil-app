"use client";

import TaskCard from "@/components/dashboard/TaskCard";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { priorityOrder } from "@/lib/constants/main";

const Page = () => {
	const tasks = useSelector((state: RootState) => state.tasks);

	const completedTasks = tasks.filter((task) => task.completed);

	const sortedCompletedTasks = completedTasks.slice().sort((a, b) => {
		const dateComparison =
			new Date(a.date).getTime() - new Date(b.date).getTime();
		if (dateComparison !== 0) return dateComparison;
		return priorityOrder[b.priority] - priorityOrder[a.priority];
	});

	return (
		<div className='flex flex-col gap-3'>
			{sortedCompletedTasks.length > 0 ? (
				sortedCompletedTasks.map((task) => (
					<TaskCard
						key={task.id}
						{...task}
					/>
				))
			) : (
				<p className='text-gray-500 text-center'>No completed tasks.</p>
			)}
		</div>
	);
};

export default Page;
