// component imports
import DemoInputForm from "./DemoInputForm.component";
import DemoTaskList from "./DemoTaskList.component";
import DemoCompletedTaskList from "./DemoCompletedTaskList.component";

const Demo = () => {
  return (
    <section>
      <h2>Add your task to the form below:</h2>
      <DemoInputForm />
      <div>
        <p>
          Tasks you still need to complete show up here. You can also remove
          tasks if needed.
        </p>
        <DemoTaskList />
        <p>Completed tasks will show up here and can be resumed if needed.</p>
        <DemoCompletedTaskList />
      </div>
    </section>
  );
};

export default Demo;
