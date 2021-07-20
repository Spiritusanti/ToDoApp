import { useRef } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";

const TodoInputForm = () => {
  const dispatch = useDispatch();
  const enteredTaskRef = useRef();
  const enteredDescriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    //Need to perform some input validation here.
    const todo = {
      id: Date.now(),
      task: enteredTaskRef.current.value,
      description: enteredDescriptionRef.current.value,
    };
    dispatch(todoActions.addTodo(todo));
    enteredTaskRef.current.value = "";
    enteredDescriptionRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label htmlFor="task">Enter Task:</label>
          <input id="task" type="text" ref={enteredTaskRef} />
        </li>
        <li>
          <label htmlFor="description">Enter details:</label>
          <input id="description" type="text" ref={enteredDescriptionRef} />
        </li>
      </ul>
      <button>Add Task</button>
    </form>
  );
};

export default TodoInputForm;
