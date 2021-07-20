import { Fragment } from "react";
import TaskItem from "./TaskItem.component";

const TaskList = (props) => {
  return (
    <Fragment>
      {props.taskList.map((task) => (
        <TaskItem key={task.id} taskName={task.task} description={task.description} />
      ))}
    </Fragment>
  );
};

export default TaskList;
