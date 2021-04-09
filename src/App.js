// library imports
import React from 'react';
// Component imports
import InputForm from './components/InputForm/inputform.component';
import Header from './components/Header/Header.component';
import List from './components/List/List.component';
// styles imports
import './App.scss';
// dummy state import {task, date, description}
import { todos } from './todos';


function App() {
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

export default App;
