import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import './InputForm.styles.scss'

const InputForm = () => {
  const [task , setTask] = useState([]);
  const [name, setName ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask({task: e.title, date: e.date, description: e.description});
    console.log(task);
  }


  const handleChange = (e) => {
    const {value, name} = e.target;
    setName({[name]: value});
  }
    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Add item</h1>
            <div className='input-container'>
              <input 
              type='text' 
              name='task' 
              id='title'
              onChange={handleChange}
              placeholder="task" />

              <input 
              type='date' 
              name='date'
              id='date'
              onChange={handleChange}
              />

              <input 
              className='description' 
              type='textfield'  
              name='description' 
              id='description' 
              placeholder='description'
              onChange={handleChange}
              />
            </div>
            <button type='submit'>submit</button>
          </form>
      </div>
    );
    
}

export default InputForm;