import React, { useState, useReducer } from "react";
import "./ToDoPage.styles.scss";
import InputForm from "../../components/InputForm/inputform.component";
import List from "../../components/List/List.component";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function todosReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName("");
    } else {
      alert("please enter Todo");
    }
  }
  console.log(todos);

  return (
    <div className="td-container">
      <div className="content">
        <InputForm name={name} handleSubmit={handleSubmit} setName={setName} />
        <List todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Todos;
