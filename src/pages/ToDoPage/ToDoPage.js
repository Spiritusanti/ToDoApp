import React from 'react';
import InputForm from '../../components/InputForm/inputform.component';
import List from '../../components/List/List.component';
import { TodosProvider } from '../../todos.context';
import './ToDoPage.styles.scss';
// dummy state
import { todos } from '../../todos';

const ToDoPage = () => {
  return (
    <div className="td-container">
      <div className="content">
        <TodosProvider>
          <InputForm />
          <List toDos={todos}/>
        </TodosProvider>
      </div>
    </div>
  );
}

export default ToDoPage;