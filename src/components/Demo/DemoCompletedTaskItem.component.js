// component imports
import Card from "../UI/Card/Card.component";

const DemoCompletedTaskItem = (props) => {
  const onResumeTodo = () => {
    props.resumeTask(props.id);
  };

  return (
    <Card>
      <div>
        <h1>{props.task}</h1>
        <button onClick={onResumeTodo}>Resume Task</button>
      </div>
    </Card>
  );
};

export default DemoCompletedTaskItem;
