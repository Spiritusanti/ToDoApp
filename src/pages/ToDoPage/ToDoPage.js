import React from 'react';
import Header from '../../components/Header/Header.component';
import InputForm from '../../components/InputForm/inputform.component';
import List from '../../components/List/List.component';
// dummy state
import { todos } from '../../todos';

const ToDoPage = () => {
return (
    <div className="App">
      <Header />
      <div className="content">
        <InputForm />
        <List toDos={todos}/>
      </div>
    </div>
  );
}

export default ToDoPage;