import React, { useRef } from "react";
import CustomButton from "../../UI/CustomButton/CustomButton.component";
import "./InputForm.styles.scss";

const InputForm = ({ onSubmit }) => {
  const taskInputRef = useRef("");
  const dateInputRef = useRef("");
  const descriptionInputRef = useRef("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: Math.random().toString(),
      task: taskInputRef.current.value,
      date: dateInputRef.current.value,
      description: descriptionInputRef.current.value,
    }
    
    onSubmit(todo);
    taskInputRef.current.value = '';
    dateInputRef.current.value = '';
    descriptionInputRef.current.value = '';
  }

  return (
    <div className="form">
      <form className="form" onSubmit={onFormSubmit}>
        <div className="input-container">
          <input ref={taskInputRef} placeholder="Add Todo" />
          <input ref={dateInputRef} type="date" />
          <input ref={descriptionInputRef} type="textfield" placeholder="...add notes" />
        </div>
        <CustomButton type='submit'>Add Item</CustomButton>
      </form>
    </div>
  );
};

export default InputForm;
