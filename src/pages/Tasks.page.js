// React imports
import { Fragment, useEffect, Suspense, useState } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../redux/todo-slice";
// import { useFetchUserTodosQuery } from "../redux/services/firebaseAPI";
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
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.auth.userInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchedTodosRef = app.database().ref(`${user.uid}/tasks`);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setIsLoading(true);
      fetchedTodosRef.once("value").then((snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setError("No tasks found!");
        }
        const transformedData = Object.values(data);
        dispatch(todoActions.loadTodos(transformedData));
      });
      setIsLoading(false);
    }
    return (mounted = false);
  }, [fetchedTodosRef, dispatch]);

  let content = <p>No tasks found</p>;
  if (todos.length > 0) {
    content = (
      <Fragment>
        <TaskList todos={todos} />
        <CompletedTasks todos={todos} />
      </Fragment>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Spinner />;
  }

  return (
    <Fragment>
      <Suspense fallback={Spinner}>
        <ProfileInsert />
        <TodoInputForm />
        <section className={classes.tasks}>{content}</section>
      </Suspense>
    </Fragment>
  );
};

export default Tasks;
