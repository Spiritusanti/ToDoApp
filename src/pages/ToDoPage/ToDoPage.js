import React, { useState } from "react";
import "./ToDoPage.styles.scss";
import InputForm from "../../components/TodosFunctionality/InputForm/inputform.component";
import List from "../../components/TodosFunctionality/List/List.component";
const Todos = () => {
  const [todos, setTodos] = useState([]);

  const todosHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  return (
    <div className="td-container">
      <InputForm onSubmit={todosHandler} />
      <div className="content">
        <List todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
