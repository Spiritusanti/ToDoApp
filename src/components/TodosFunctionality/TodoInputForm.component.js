// react imports
import { useState } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";
import Card from "../UI/Card/Card.component";
// firebase imports
import app from "../../firebase/firebase";
// style imports
import classes from "./TodoInputForm.module.scss";

const TodoInputForm = () => {
  const dispatch = useDispatch();
  // input values
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  // input touched values
  const [enteredTaskIsTouched, setEnteredTaskIsTouched] = useState(false);
  const [enteredDescriptionIsTouched, setEnteredDescriptionIsTouched] =
    useState(false);

  const uid = app.auth().currentUser.uid;

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

  // firebase POST functionality
  const addTaskHandler = async (todo, uid) => {
    app.database().ref(`${uid}/tasks`).push(todo);
  };

  // sumbit handler
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
    addTaskHandler(todo, uid);
    dispatch(todoActions.addTodo(todo));
    resetInputs();
  };

  return (
    <Card>
      <label htmlFor="form">
        <h1>Add tasks</h1>
      </label>
      <form className={classes.form} onSubmit={submitHandler}>
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

export default TodoInputForm;
