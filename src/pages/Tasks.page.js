// React imports
import { Fragment } from "react";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
// style imports
import classes from "./Task.module.scss";

const Tasks = () => {
  return (
    <Fragment>
      <ProfileInsert />
      <TodoInputForm />
      <section className={classes.tasks}>
        <TaskList />
        <CompletedTasks />
      </section>
    </Fragment>
  );
};

export default Tasks;
