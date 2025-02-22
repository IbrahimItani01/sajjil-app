import { mockTasks } from "@/mockData/tasks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
	title: string;
	description: string;
	priority: "!!!" | "!!" | "!";
	date: string;
	completed: boolean;
};

const initialState: Task[] = mockTasks;

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
				const priorityOrder = { "!!!": 3, "!!": 2, "!": 1 };
				return priorityOrder[a.priority] - priorityOrder[b.priority];
			});
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			return state.filter((task) => task.title !== action.payload);
		},
		toggleTask: (state, action: PayloadAction<string>) => {
			const task = state.find((task) => task.title === action.payload);
			if (task) task.completed = !task.completed;
		},
		updateTask: (state, action: PayloadAction<Task>) => {
			const index = state.findIndex(
				(task) => task.title === action.payload.title
			);
			if (index !== -1) state[index] = action.payload;
		},

		sortTasks: (state) => {
			state.sort((a, b) => {
				const dateComparison =
					new Date(a.date).getTime() - new Date(b.date).getTime();
				if (dateComparison !== 0) return dateComparison;
				const priorityOrder = { "!!!": 3, "!!": 2, "!": 1 };
				return priorityOrder[a.priority] - priorityOrder[b.priority];
			});
		},
	},
});

export const { addTask, deleteTask, toggleTask, updateTask, sortTasks } =
	tasksSlice.actions;
export default tasksSlice.reducer;
