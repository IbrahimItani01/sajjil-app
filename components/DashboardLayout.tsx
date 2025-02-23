"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/slices/tasks.slice";
import FAB from "./base/FAB";
import { usePathname } from "next/navigation";
import AddTaskForm from "./dashboard/AddTaskForm";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const dispatch = useDispatch();
	const [showAdd, setShowAdd] = React.useState(false);

	const pageTitles: { [key: string]: string } = {
		"/dashboard/today": "Today's Tasks",
		"/dashboard": "All Your Tasks",
		"/dashboard/completed": "Completed Tasks",
	};

	const showFAB = pathname === "/dashboard";
	const toggleAddTask = () => {
		setShowAdd(!showAdd);
	};

	// Function to handle saving a new task
	const handleSaveTask = (newTask: {
		title: string;
		description: string;
		priority: "!!!" | "!!" | "!";
		date: string;
	}) => {
		dispatch(
			addTask({
				...newTask,
				priority: newTask.priority as "!!!" | "!!" | "!", // Ensure priority type matches
				completed: false,
			})
		);
		setShowAdd(false);
	};

	return (
		<div>
			<h1 className='text-center font-bold text-xl my-4'>
				{pageTitles[pathname] || "Dashboard"}
			</h1>

			<div className='max-w-2xl mx-auto border border-orange-400 rounded-xl p-6 h-[80vh] flex flex-col'>
				<div className='overflow-y-auto flex-grow p-2 custom-scroll'>
					{children}
				</div>
			</div>
			{showAdd && (
				<AddTaskForm
					onSave={handleSaveTask}
					toggleAddTask={toggleAddTask}
				/>
			)}
			{showFAB && <FAB onPress={toggleAddTask} />}
		</div>
	);
};

export default DashboardLayout;
