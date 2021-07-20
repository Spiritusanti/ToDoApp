import { Fragment } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.component";

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <Fragment>
      {todos.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          taskName={task.task}
          description={task.description}
        />
      ))}
    </Fragment>
  );
};

export default TaskList;
