import React from 'react';
import InputForm from '../../components/InputForm/inputform.component';
import List from '../../components/List/List.component';
import './ToDoPage.styles.scss';
// dummy state
import { todos } from '../../todos';

const ToDoPage = () => {

  return (
    <div className="td-container">
      <div className="content">
        <InputForm />
        <List toDos={todos}/>
      </div>
    </div>
  );
}

export default ToDoPage;