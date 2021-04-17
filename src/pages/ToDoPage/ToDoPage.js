import React, { useState } from 'react';
import InputForm from '../../components/InputForm/inputform.component';
import List from '../../components/List/List.component';
import './ToDoPage.styles.scss';
// dummy state
// import { todos } from '../../todos';



const ToDoPage = () => {
  const [todos, setTodos] = useState([]);
  console.log('todos', todos);

  const updateTodos = (data) => {
    return setTodos([...todos, data]);
  }

  return (
    <div className="td-container">
      <div className="content">
          <InputForm onUpdateTodos={updateTodos}/>
          <List taskList={todos}/>
      </div>
    </div>
  );
}

export default ToDoPage;