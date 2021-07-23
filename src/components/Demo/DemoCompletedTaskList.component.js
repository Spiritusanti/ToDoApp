// component imports
import Card from "../UI/Card/Card.component";
import DemoCompletedTaskItem from "./DemoCompletedTaskItem.component";

const DemoCompletedTaskList = (props) => {
  const completedTasks = props.todos.filter((task) => task.complete === true);

  return (
    <Card>
      <h1>Completed Tasks:</h1>
      {completedTasks.map((task) => (
        <DemoCompletedTaskItem
          key={task.id}
          id={task.id}
          task={task.task}
          resumeTask={props.resumeTask}
        />
      ))}
    </Card>
  );
};

export default DemoCompletedTaskList;
