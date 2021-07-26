// redux imports
import { useSelector } from "react-redux";
// component imports
import Card from "../UI/Card/Card.component";
import DemoCompletedTaskItem from "./DemoCompletedTaskItem.component";

const DemoCompletedTaskList = () => {
  const tasks = useSelector((state) => state.demo.demoTasks);
  const completedTasks = tasks.filter((task) => task.complete === true);

  return (
    <Card>
      <h1>Completed Tasks:</h1>
      {completedTasks.map((task) => (
        <DemoCompletedTaskItem
          key={task.id}
          id={task.id}
          task={task.task}
        />
      ))}
    </Card>
  );
};

export default DemoCompletedTaskList;
