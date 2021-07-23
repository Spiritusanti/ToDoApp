// component imports
import Card from "../UI/Card/Card.component";

const DemoTaskItem = (props) => {
  const onCompleteTask = () => {
    props.completeTask(props.id);
  };

  const onRemoveTask = () => {
    props.removeTask(props.id);
  };

  return (
    <Card>
      <div>
        <div>
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