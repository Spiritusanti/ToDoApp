// redux imports
import { useSelector } from "react-redux";
// style imports
import classes from "./ProfileStats.module.scss";

// component that displays the number of tasks added and completed.
const ProfileStats = () => {
  const tasks = useSelector((state) => state.todos.todos);
  const inProgressTasks = tasks.filter((task) => task.complete === false);
  const completedTasks = tasks.filter((task) => task.complete === true);
  const percentageTasksCompleted =
    tasks.length > 0
      ? Math.floor((completedTasks.length / tasks.length) * 100) + "%"
      : "No tasks added";

  return (
    <section className={classes.profileStats}>
      <label htmlFor="ul">Your stats:</label>
      <ul>
        <li>
          <h3>{`Total tasks added: ${tasks.length}`}</h3>
        </li>
        <li>
          <h3>{`Tasks in progress: ${inProgressTasks.length}`}</h3>
        </li>
        <li>
          <h3>{`Total tasks completed: ${completedTasks.length}`}</h3>
        </li>
        <li>
          <h3>{`percentage completed: ${percentageTasksCompleted}`}</h3>
        </li>
      </ul>
    </section>
  );
};

export default ProfileStats;
