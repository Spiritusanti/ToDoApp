// React imports
import { Fragment, useEffect } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { getTasks } from "../redux/todo-slice";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
// style imports
import classes from "./Task.module.scss";
import app from "../firebase/firebase";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    if (mounted && app.auth().currentUser) {
      const uid = app.auth().currentUser.uid;
      dispatch(getTasks(uid));
    }
    return () => (mounted = false);
  });

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
