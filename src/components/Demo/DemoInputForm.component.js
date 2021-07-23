// react imports
import { useState } from "react";
// component imports
import Card from "../UI/Card/Card.component";

const DemoInputForm = (props) => {
  // input values
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  // input touched values
  const [enteredTaskIsTouched, setEnteredTaskIsTouched] = useState(false);
  const [enteredDescriptionIsTouched, setEnteredDescriptionIsTouched] =
    useState(false);

  // Input onChange handlers
  const enteredTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const enteredDescriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  // Blur handlers
  const enteredTaskBlurHandler = (event) => {
    setEnteredTaskIsTouched(true);
  };

  const enteredDescriptionBlurHandler = (event) => {
    setEnteredDescriptionIsTouched(true);
  };
  // Input reset
  const resetInputs = () => {
    setEnteredTask("");
    setEnteredDescription("");
    setEnteredTaskIsTouched(false);
    setEnteredDescriptionIsTouched(false);
  };

  // validation
  const enteredTaskIsValid = enteredTask.trim().length > 0;
  const enteredDescriptionIsValid = enteredDescription.trim().length > 0;

  // error handling
  const enteredTaskHasError = !enteredTaskIsValid && enteredTaskIsTouched;
  const enteredDescriptionHasError =
    !enteredDescriptionIsValid && enteredDescriptionIsTouched;

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredTaskIsValid || !enteredDescriptionIsValid) {
      return;
    }

    const todo = {
      id: Date.now(),
      task: enteredTask,
      description: enteredDescription,
      complete: false,
    };

    props.onAddTodo(todo);
    resetInputs();
  };

  return (
    <Card>
      <label htmlFor="form">
        <h1>Add tasks</h1>
      </label>
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            <label htmlFor="task">Enter Task:</label>
            <input
              id="task"
              type="text"
              onChange={enteredTaskHandler}
              value={enteredTask}
              onBlur={enteredTaskBlurHandler}
            />
            {enteredTaskHasError && (
              <p style={{ color: "red" }}>Please enter a task</p>
            )}
          </li>
          <li>
            <label htmlFor="description">Enter details:</label>
            <input
              id="description"
              type="text"
              onChange={enteredDescriptionHandler}
              value={enteredDescription}
              onBlur={enteredDescriptionBlurHandler}
            />
            {enteredDescriptionHasError && (
              <p style={{ color: "red" }}>Please enter a description!</p>
            )}
          </li>
        </ul>
        <button type="submit">Add Task</button>
      </form>
    </Card>
  );
};


export default DemoInputForm;