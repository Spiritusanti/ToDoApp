import Card from "../UI/Card/Card.component";
import DemoTaskItem from "./DemoTaskItem.component";

const DemoTaskList = (props) => {
  const inProgressTasks = props.todos.filter((task) => task.complete === false);

  return (
    <Card>
      <h1>Tasks in progress:</h1>
      {inProgressTasks.map((task) => (
        <DemoTaskItem
          key={task.id}
          id={task.id}
          taskName={task.task}
          description={task.description}
          completeTask={props.completeTask}
          removeTask={props.removeTask}
        />
      ))}
    </Card>
  );
};

export default DemoTaskList;
