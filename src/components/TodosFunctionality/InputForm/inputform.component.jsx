import React, { useState } from "react";
import "./InputForm.styles.scss";

const InputForm = ({ onSubmit }) => {
  // state handling
  const [taskInput, setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  // error state
  const [error, setError] = useState(null);

  // onChange Handlers
  const taskInputHandler = (event) => {
    setTaskInput(event.target.value);
  };
  const dateInputHandler = (event) => {
    setDateInput(event.target.value);
  };
  const descriptionInputHandler = (event) => {
    setDescriptionInput(event.target.value);
  };

  const resetInputs = () => {
    setTaskInput("");
    setDateInput("");
    setDescriptionInput("");
  };

  // validation
  const taskInputIsValid = taskInput.trim().length > 0;
  const dateInputIsValid = dateInput.trim().length > 0;
  const descriptionInputIsValid = descriptionInput.trim().length > 0;
  const formIsValid =
    taskInputIsValid && dateInputIsValid && descriptionInputIsValid;

  // form submit handler
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setError("Invalid Input");
      return;
    }
    const todo = {
      id: Math.random().toString(),
      task: taskInput,
      date: dateInput,
      description: descriptionInput,
      isComplete: false,
    };
    onSubmit(todo);
    resetInputs();
    setError(null);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-container">
        <input
          onChange={taskInputHandler}
          value={taskInput}
          placeholder="Add Todo"
        />
        {error && !taskInputIsValid && (
          <p>Please enter a todo!</p>
        )}
        <input onChange={dateInputHandler} value={dateInput} type="date" />
        {error && !dateInputIsValid && (
          <p>Please enter a date!</p>
        )}
        <input
          onChange={descriptionInputHandler}
          value={descriptionInput}
          type="textfield"
          placeholder="...add notes"
        />
        {error && !descriptionInputIsValid && (
          <p>Please enter a description!</p>
        )}
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default InputForm;
