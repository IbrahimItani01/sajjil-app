import { priorityOrder } from "@/lib/constants/main";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
	id: string;
	description: string;
	priority: "HIGH" | "MEDIUM" | "LOW";
	date: string;
	completed: boolean;
};

const initialState: Task[] = [];

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.push(action.payload);

			state.sort((a, b) => {
				const dateComparison =
					new Date(a.date).getTime() - new Date(b.date).getTime();
				if (dateComparison !== 0) return dateComparison;

				return priorityOrder[b.priority] - priorityOrder[a.priority];
			});
		},

		deleteTask: (state, action: PayloadAction<string>) => {
			return state.filter((task) => task.id !== action.payload);
		},

		toggleTask: (state, action: PayloadAction<string>) => {
			const task = state.find((task) => task.id === action.payload);
			if (task) task.completed = !task.completed;
		},

		updateTask: (state, action: PayloadAction<Task>) => {
			const index = state.findIndex((task) => task.id === action.payload.id);
			if (index !== -1) state[index] = action.payload;
		},

		sortTasks: (state) => {
			state.sort((a, b) => {
				const dateComparison =
					new Date(a.date).getTime() - new Date(b.date).getTime();
				if (dateComparison !== 0) return dateComparison;

				const priorityOrder: Record<"HIGH" | "MEDIUM" | "LOW", number> = {
					HIGH: 3,
					MEDIUM: 2,
					LOW: 1,
				};

				return priorityOrder[b.priority] - priorityOrder[a.priority];
			});
		},

		resetTasks: () => initialState,
	},
});

export const {
	addTask,
	deleteTask,
	toggleTask,
	updateTask,
	sortTasks,
	resetTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
