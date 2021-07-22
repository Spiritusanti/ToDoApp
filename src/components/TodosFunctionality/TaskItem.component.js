// Redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";
import Card from "../UI/Card/Card.component";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  const onRemoveTask = () => {
    dispatch(todoActions.deleteTodo(props.id));
  };

  const onCompleteTask = () => {
    dispatch(todoActions.completeTodo(props.id));
  };

  return (
    <Card>
      <button onClick={onRemoveTask}>Delete</button>
      <h2>{props.taskName}</h2>
      <p>{props.description}</p>
      <button onClick={onCompleteTask}>Complete Task</button>
    </Card>
  );
};

export default TaskItem;
