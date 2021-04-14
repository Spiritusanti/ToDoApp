import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import { useForm } from "react-hook-form";
import './InputForm.styles.scss'

const InputForm = () => {
  const { register, handleSubmit} = useForm();

  const onFormSubmit = data => console.log(data);
  const onErrors = errors => console.error(errors);

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
            <CustomButton text="add to list" action='submit'/>
          </form>
      </div>
    );
    
}

export default InputForm;