// component imports
import Card from "../UI/Card/Card.component";
// redux imports
import { useDispatch } from "react-redux";
import { demoActions } from "../../redux/demo-slice";
// style import
import classes from "../TodosFunctionality/CompletedTaskItem.module.scss";

const DemoCompletedTaskItem = (props) => {
  const dispatch = useDispatch();

  const onResumeTodo = () => {
    dispatch(demoActions.resumeDemoTodo(props.id));
  };

  return (
    <Card>
      <div className={classes.complete}>
        <h1>{props.task}</h1>
        <button onClick={onResumeTodo}>Resume Task</button>
      </div>
    </Card>
  );
};

export default DemoCompletedTaskItem;
