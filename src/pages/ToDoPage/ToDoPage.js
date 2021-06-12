import React, { useState } from "react";
import "./ToDoPage.styles.scss";
import InputForm from "../../components/TodosFunctionality/InputForm/inputform.component";
import List from "../../components/TodosFunctionality/List/List.component";
const Todos = () => {
  const [todos, setTodos] = useState([])

  const todosHandler= (todo) => {
    setTodos((prevTodos) => {
      return [ ...prevTodos, todo]
    })
  }

  return (
    <div className="td-container">
      <div className="content">
        <InputForm onSubmit={todosHandler} />
        <List todos={todos} />
      </div>
    </div>
  );
}

export default Todos;
