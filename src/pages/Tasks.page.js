// React imports
import { Fragment, useEffect, Suspense, useState, useCallback } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
// import { useFetchUserTodosQuery } from "../redux/services/firebaseAPI";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
import Spinner from "../components/UI/Spinner/Spinner.component";
// style imports
import classes from "./Task.module.scss";

const Tasks = () => {
  // const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.auth.userInfo);
  const [retrievedTodos, setRetrievedTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `https://todoapp-6d4de-default-rtdb.firebaseio.com/${user.uid}/tasks.json`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setRetrievedTodos(data);
      console.log(retrievedTodos);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [user, retrievedTodos]);

  useEffect(() => {
    fetchUserTasks();
  }, [fetchUserTasks]);

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
