// React imports
import { Fragment, useEffect, useState, Suspense } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/todo-slice";
import { useGetTasksByUID } from "../redux/services/firebase-query";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
import Spinner from "../components/UI/Spinner/Spinner.component";
// style imports
import classes from "./Task.module.scss";
import app from "../firebase/firebase";

const Tasks = () => {
  const dispatch = useDispatch();
  const [uid, setUid] = useState(null);
  // const { data, error, isLoading } = useGetTasksByUID(uid);

  // grab uid on render to initiate query
  useEffect(() => {
    let mounted = true;
    if (mounted && app.auth().currentUser) {
      setUid(app.auth().currentUser.uid);
    }
    return () => (mounted = false);
  }, []);

  // dispatch to redux to set todos
  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted && data) {
  //     dispatch(todoActions.loadTodos(data));
  //   }
  //   return () => (mounted = false);
  // }, [data, dispatch]);

  return (
    <Fragment>
      <Suspense fallback={Spinner}>
        <ProfileInsert />
        <TodoInputForm />
        <section className={classes.tasks}>
          <TaskList />
          <CompletedTasks />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default Tasks;
