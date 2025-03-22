import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // 🟢 Certifique-se de que está sendo importado corretamente!
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
