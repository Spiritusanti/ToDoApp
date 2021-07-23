// react imports
import { useState } from "react";
// component imports
import DemoInputForm from "./DemoInputForm.component";
import DemoTaskList from "./DemoTaskList.component";
import DemoCompletedTaskList from "./DemoCompletedTaskList.component";

const Demo = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (todo) => {
    setTasks((prevState) => [...prevState, todo]);
  };

  const completeTask = (id) => {
    const isCurrentTask = tasks.find((task) => task.id === id);
    if (!isCurrentTask) {
      return;
    }
    isCurrentTask.complete = true;
  };

  const removeTask = (id) => {
    const isCurrentTask = tasks.find((task) => task.id === id);
    if (!isCurrentTask) {
      return;
    }
    setTasks((prevState) => [
      ...prevState,
      tasks.filter((task) => task.id !== id),
    ]);
  };

  const resumeTask = (id) => {
    const isCurrentTask = tasks.find((task) => task.id === id);
    if (!isCurrentTask) {
      return;
    }
    isCurrentTask.complete = false;
  };

  return (
    <section>
      <h2>Add your task to the form below:</h2>
      <DemoInputForm onAddTodo={addTaskHandler} />
      <div>
        <p>
          Tasks you still need to complete show up here. You can also remove
          tasks if needed.
        </p>
        <DemoTaskList
          todos={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
        <p>Completed tasks will show up here and can be resumed if needed.</p>
        <DemoCompletedTaskList todos={tasks} resumeTask={resumeTask} />
      </div>
    </section>
  );
};

export default Demo;
