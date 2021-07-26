// redux imports
import { useDispatch } from "react-redux";
import { demoActions } from "../../redux/demo-slice";
// component imports
import Card from "../UI/Card/Card.component";
// style import
import classes from "../TodosFunctionality/TaskItem.module.scss";

const DemoTaskItem = (props) => {
  const dispatch = useDispatch();

  const onCompleteTask = () => {
    dispatch(demoActions.completeDemoTodo(props.id));
  };

  const onRemoveTask = () => {
    dispatch(demoActions.deleteDemoTodo(props.id));
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

export default DemoTaskItem;
