// component imports
import DemoInputForm from "./DemoInputForm.component";
import DemoTaskList from "./DemoTaskList.component";
import DemoCompletedTaskList from "./DemoCompletedTaskList.component";


const Demo = () => {
  return (
    <section >
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
