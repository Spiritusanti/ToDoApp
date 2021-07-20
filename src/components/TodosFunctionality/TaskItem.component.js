// Redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  const onRemoveTask = () => {
    dispatch(todoActions.deleteTodo(props.id));
  };

  const onCompleteTask = () => {
    dispatch(todoActions.completeTodo(props.id));
  };

  return (
    <div>
      <h2 onClick={onRemoveTask}>X</h2>
      <h2>{props.taskName}</h2>
      <p>{props.description}</p>
      <button onClick={onCompleteTask}>Complete Task</button>
    </div>
  );
};

export default TaskItem;
