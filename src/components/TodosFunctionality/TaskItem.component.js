import Card from "../UI/Card/Card.component";

const TaskItem = (props) => {
  return (
    <Card>
      <h2>{props.taskName}</h2>
      <p>{props.description}</p>
    </Card>
  );
};

export default TaskItem;