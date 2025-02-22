import { Task } from "@/redux/slices/tasks.slice";

export const mockTasks: Task[] = [
	{
		title: "Task 1",
		description: "This is the description for Task 1.",
		priority: "!!!", // High priority
		date: "2025-02-22",
		completed: false,
	},
	{
		title: "Task 2",
		description: "This is the description for Task 2.",
		priority: "!!", // Medium priority
		date: "2025-02-23",
		completed: true,
	},
	{
		title: "Task 3",
		description: "This is the description for Task 3.",
		priority: "!", // Low priority
		date: "2025-02-24",
		completed: false,
	},
	{
		title: "Task 4",
		description: "Urgent fix needed for the backend API.",
		priority: "!!!", // High priority
		date: "2025-02-22",
		completed: false,
	},
	{
		title: "Task 5",
		description: "Write a report for the team meeting.",
		priority: "!!", // Medium priority
		date: "2025-02-22",
		completed: false,
	},
	{
		title: "Task 6",
		description: "Refactor the dashboard component.",
		priority: "!", // Low priority
		date: "2025-02-22",
		completed: true,
	},
	{
		title: "Task 7",
		description: "Prepare slides for the client presentation.",
		priority: "!!", // Medium priority
		date: "2025-02-22",
		completed: false,
	},
];
