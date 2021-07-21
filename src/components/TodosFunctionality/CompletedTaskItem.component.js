import Card from "../UI/Card/Card.component";


// component similar to TaskItem but for completed task. Displays only task title and a button
// Once clicked button allows user to return task to active status.
const CompletedTaskItem = (props) => {
  return (
    <Card>
      <h1>{props.task}</h1>
      <button>Resume Task</button>
    </Card>
  );
};

export default CompletedTaskItem;
