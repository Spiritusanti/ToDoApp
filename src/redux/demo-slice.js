import { createSlice } from "@reduxjs/toolkit";

const initialState = { demoTasks: [] };

export const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    addDemoTodo(state, action) {
      // add new todo to state
      state.demoTasks.push(action.payload);
    },
    completeDemoTodo(state, action) {
      // locate todo by id and toggle complete value to true
      const isCompletedTodoId = action.payload;
      const isCurrentTodo = state.demoTasks.find(
        (todo) => todo.id === isCompletedTodoId
      );
      if (!isCurrentTodo) {
        return;
      }
      isCurrentTodo.complete = true;
    },
    resumeDemoTodo(state, action) {
      const resumeTodoId = action.payload;
      const isCurrentTodo = state.demoTasks.find(
        (todo) => todo.id === resumeTodoId
      );
      if (!isCurrentTodo) {
        return;
      }
      isCurrentTodo.complete = false;
    },
    deleteDemoTodo(state, action) {
      // delete todo from state via array.filter();
      const todoId = action.payload;
      const isCurrentTodo = state.demoTasks.find((todo) => todo.id === todoId);
      if (!isCurrentTodo) {
        return;
      }
      state.demoTasks = state.demoTasks.filter((todo) => todo.id !== todoId);
    },
  },
});

export const demoActions = demoSlice.actions;

export default demoSlice;
