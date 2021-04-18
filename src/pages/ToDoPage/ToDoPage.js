import React, { useState, useReducer } from 'react';
// import InputForm from '../../components/InputForm/inputform.component';
// import List from '../../components/List/List.component';
// stylesheets
import '../../components/InputForm/InputForm.styles.scss';
import '../../components/List/List.styles.scss';
import '../../components/ListItem/ListItem.styles.scss';
import './ToDoPage.styles.scss';
import CustomButton from '../../components/CustomButton/CustomButton.component';
// dummy state
// import { todos } from '../../todos';

export const ACTIONS = {
  ADD_TASK: 'add_task',
  TOGGLE_TASK: 'toggle_task',
  REMOVE_TASK: 'remove_task' 
}

const reducer = (todos, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TASK:
      return [...todos, newTask(action.payload.task, action.payload.date, action.payload.description, action.payload.id, action.payload.complete)];
    case ACTIONS.TOGGLE_TASK:
      return todos.map(task => {
        if(task.id === action.payload.id){
          return{...task, complete: !task.complete}
        }
        return task;
      })
    case ACTIONS.REMOVE_TASK:
      return todos.filter(task =>  task.id !== action.payload.id);
    default:
      return todos
  }
}

const newTask = (task, date, description) => {
  return {id:Date.now(), task:task, date:date, description:description, complete:false};
}

// {id:1, task:'hello', date:'05/20/1991', description:'holy crap you guys', complete: false}

const ToDoPage = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TASK, payload:{task:task, date:date, description:description}});
  }


  return (
    <div className="td-container">
      <div className="content">
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <h1>add item</h1>
            <div className='input-container'>
              <input required type='text' placeholder='task' value={task} onChange={e => setTask(e.target.value)}/>
              <input required type='date' value={date} onChange={e => setDate(e.target.value)}/>
              <textarea required id='description' placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <CustomButton text='add to list' action='submit' handleClick={handleSubmit} />
          </form>
        </div>
        <div className='ListItems'>
          <h2>To Do List</h2>
          <div className='todos-container'>
            {
              todos.map((todo, key) => {
                return (
                  <div className='listItem'>
                  <h2 className='task complete'>{todo.task}</h2>
                  <div className='info-container'>
                      <h2 className='date'>Date: {todo.date}</h2>
                      <p className='description'>Description: {todo.description}</p>
                  </div>
                  <div className='actions-container' >
                      <CustomButton text={'complete'} handleClick={() => {dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}}/>
                      <CustomButton text={'remove'} handleClick= {()=> {dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})}}/>
                  </div>
              </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoPage;