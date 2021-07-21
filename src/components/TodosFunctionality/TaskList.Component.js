import { useSelector } from "react-redux";
import Card from "../UI/Card/Card.component";
import TaskItem from "./TaskItem.component";

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const inProgressTasks = todos.filter((task) => task.completed === false);

  return (
    <Card>
    <h1>Tasks in progress:</h1>
      {inProgressTasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          taskName={task.task}
          description={task.description}
        />
      ))}
    </Card>
  );
};

export default TaskList;
