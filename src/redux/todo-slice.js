import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      // add new todo to state
      state.todos.push(action.payload);
    },
    completeTodo(state, action) {
      // locate todo by id and toggle complete value to true
      const isCompletedTodoId = action.payload;
      const isCurrentTodo = state.todos.find(
        (todo) => todo.id === isCompletedTodoId
      );
      if (!isCurrentTodo) {
        return;
      }
      isCurrentTodo.complete = true;
    },
    resumeTodo(state, action) {
      const resumeTodoId = action.payload;
      const isCurrentTodo = state.todos.find(
        (todo) => todo.id === resumeTodoId
      );
      if (!isCurrentTodo) {
        return;
      }
      isCurrentTodo.complete = false;
    },
    deleteTodo(state, action) {
      // delete todo from state via array.filter();
      const todoId = action.payload;
      const isCurrentTodo = state.todos.find((todo) => todo.id === todoId);
      if (!isCurrentTodo) {
        return;
      }
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
