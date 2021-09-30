// React imports
import { Fragment, useEffect, Suspense, useState, useCallback } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../redux/todo-slice";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
import Spinner from "../components/UI/Spinner/Spinner.component";
// style imports
import classes from "./Task.module.scss";

const Tasks = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const user = useSelector((state) => state.auth.userInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserTodos = useCallback(async () => {
    setError(null);
    const response = await fetch(
      `https://todoapp-6d4de-default-rtdb.firebaseio.com/${user.uid}/tasks.json`
    );
    if (!response.ok) {
      setError("Could not fetch tasks!");
      return;
    }
    const data = await response.json();
    dispatch(todoActions.loadTodos(data));
  }, [user.uid, dispatch]);

  useEffect(() => {
    setIsLoading(true);
    fetchUserTodos();
    setIsLoading(false);
  }, [fetchUserTodos]);

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
