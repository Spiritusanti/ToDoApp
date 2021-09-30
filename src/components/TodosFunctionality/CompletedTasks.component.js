import Card from "../UI/Card/Card.component";
import CompletedTaskItem from "./CompletedTaskItem.component";

// build a component similar to TaskList but that only displays tasks that have been completed
const CompletedTasks = (todos) => {
  const completedTasks = todos.todos.filter((task) => task.complete === true);

  return (
    <Card>
      <h1>Completed Tasks:</h1>
      {completedTasks.map((task) => (
        <CompletedTaskItem key={task.id} id={task.id} task={task.task} />
      ))}
    </Card>
  );
};

export default CompletedTasks;
