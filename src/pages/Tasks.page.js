// React imports
import { Fragment, useEffect, Suspense, useState } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserTodosQuery } from "../redux/services/firebaseAPI";
// component imports
import TodoInputForm from "../components/TodosFunctionality/TodoInputForm.component";
import TaskList from "../components/TodosFunctionality/TaskList.Component";
import CompletedTasks from "../components/TodosFunctionality/CompletedTasks.component";
import ProfileInsert from "../components/Profile/ProfileInsert.component";
import Spinner from "../components/UI/Spinner/Spinner.component";
// style imports
import classes from "./Task.module.scss";

const Tasks = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const [retrieved, setRetrieved] = useState();
  const dispatch = useDispatch();
  const { data = [], isFetching } = useFetchUserTodosQuery(user.uid);

  useEffect(() => {
    let mounted = true;
    if (!isFetching && user && mounted) {
      setRetrieved(data);
    }
    console.log(retrieved);
    return (mounted = false);
  }, [data, isFetching, retrieved, user]);

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
