import React, { useState, useContext } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import { useForm } from "react-hook-form";
import './InputForm.styles.scss'
import { TodosContext } from '../../todos.context';

const InputForm = () => {
  // for setup
  const { register, handleSubmit} = useForm();
  const onFormSubmit = data => setTask(data);
  const onErrors = errors => console.error(errors);
  // state managment
  const [task, setTask] = useState([]);
  const [todos, setTodos] = useContext(TodosContext);
  console.log('todos:', todos);
  console.log('task:', task);
  
    return (
        <div className="form">
          <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
            <h1>Add item</h1>
            <div className='input-container'>
              <input 
              {...register("task", { required: true })}  
              type='text' 
              placeholder="task"
              />
              <input 
              {...register("date")} 
              type='date'
              />
              <textarea 
              {...register("description", { required:true })}
              id='description' 
              placeholder='description'
              />

            </div>
            <CustomButton text="add to list" action='submit' />
          </form>
      </div>
    ); 
}

export default InputForm;