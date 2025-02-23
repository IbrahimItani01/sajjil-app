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
		addTask: (
			state,
			action: PayloadAction<Task> // Task now directly matches the backend data structure
		) => {
			state.push(action.payload);

			// Sort tasks after addition
			state.sort((a, b) => {
				// First, compare by date
				const dateComparison =
					new Date(a.date).getTime() - new Date(b.date).getTime();
				if (dateComparison !== 0) return dateComparison;

				// Then, compare by priority (high to low)
				const priorityOrder: Record<"HIGH" | "MEDIUM" | "LOW", number> = {
					HIGH: 3,
					MEDIUM: 2,
					LOW: 1,
				};

				return priorityOrder[b.priority] - priorityOrder[a.priority]; // Sort by priority descending
			});
		},

		deleteTask: (state, action: PayloadAction<string>) => {
			// Use task.id instead of task.title to delete the task
			return state.filter((task) => task.id !== action.payload);
		},

		toggleTask: (state, action: PayloadAction<string>) => {
			// Use task.id instead of task.title to toggle completion
			const task = state.find((task) => task.id === action.payload);
			if (task) task.completed = !task.completed;
		},

		updateTask: (state, action: PayloadAction<Task>) => {
			// Use task.id instead of task.title to find the task
			const index = state.findIndex((task) => task.id === action.payload.id);
			if (index !== -1) state[index] = action.payload;
		},

		sortTasks: (state) => {
			state.sort((a, b) => {
				// First, compare by date
				const dateComparison =
					new Date(a.date).getTime() - new Date(b.date).getTime();
				if (dateComparison !== 0) return dateComparison;

				// Then, compare by priority (high to low)
				const priorityOrder: Record<"HIGH" | "MEDIUM" | "LOW", number> = {
					HIGH: 3,
					MEDIUM: 2,
					LOW: 1,
				};

				return priorityOrder[b.priority] - priorityOrder[a.priority]; // Sort by priority descending
			});
		},

		// Reset the tasks state
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
