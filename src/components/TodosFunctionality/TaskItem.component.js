// Redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";
// Component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./TaskItem.module.scss";

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
      <div className={classes.inProgress}>
        <div className={classes.content}>
          <ul>
            <li>
              <label htmlFor="h3">Task:</label>
              <h3>{props.taskName}</h3>
            </li>
            <li>
              <label htmlFor="p">Description:</label>
              <p>{props.description}</p>
            </li>
          </ul>
        </div>
        <button onClick={onCompleteTask}>Complete Task</button>
        <button onClick={onRemoveTask}>Delete</button>
      </div>
    </Card>
  );
};

export default TaskItem;
