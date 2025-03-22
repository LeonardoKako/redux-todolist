import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypeTask = {
  name: string;
  email: string;
  phone: string;
};

const initialState: TypeTask[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TypeTask>) => {
      state.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    updateTask: (
      state,
      action: PayloadAction<{ index: number; task: TypeTask }>
    ) => {
      state[action.payload.index] = action.payload.task;
    },
  },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
