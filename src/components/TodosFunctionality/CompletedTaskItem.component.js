import Card from "../UI/Card/Card.component";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";

// component similar to TaskItem but for completed task. Displays only task title and a button
// Once clicked button allows user to return task to active status.
const CompletedTaskItem = (props) => {
  const dispatch = useDispatch();

  const onResumeTodo = () => {
    dispatch(todoActions.resumeTodo(props.id));
  }
  return (
    <Card>
      <h1>{props.task}</h1>
      <button onClick={onResumeTodo}>Resume Task</button>
    </Card>
  );
};

export default CompletedTaskItem;
