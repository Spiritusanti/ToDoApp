// react imports
import { Fragment } from "react";
// minimal pie chart import
import { PieChart } from "react-minimal-pie-chart";
// style imports
import classes from "./ProfileGraph.module.scss";

// component displays a graph reflecting the user stats.
const ProfileGraph = (props) => {
  const { tasks, inProgressTasks, completedTasks } = props;

  const taskBreakdownData = [
    {
      title: "Tasks in Progress",
      value: inProgressTasks.length,
      color: "#E38627",
    },
    {
      title: "Completed Tasks",
      value: completedTasks.length,
      color: "#C13C37",
    },
  ];

  return (
    <Fragment>
      <h2>Task Breakdown</h2>
      <div className={classes.graphWrapper}>
        <PieChart
          totalValue={tasks.length}
          animate="true"
          data={taskBreakdownData}
          radius="50"
          label={({ dataEntry }) => dataEntry.title}
        />
      </div>
    </Fragment>
  );
};

export default ProfileGraph;
