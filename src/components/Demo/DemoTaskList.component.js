// redux imports
import { useSelector } from "react-redux";
// component imports
import Card from "../UI/Card/Card.component";
import DemoTaskItem from "./DemoTaskItem.component";

const DemoTaskList = (props) => {
  const tasks = useSelector((state) => state.demo.demoTasks);
  const inProgressTasks = tasks.filter((task) => task.complete === false);

  return (
    <Card>
      <h1>Tasks in progress:</h1>
      {inProgressTasks.map((task) => (
        <DemoTaskItem
          key={task.id}
          id={task.id}
          taskName={task.task}
          description={task.description}
        />
      ))}
    </Card>
  );
};

export default DemoTaskList;
