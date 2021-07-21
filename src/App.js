// library imports
// Page imports
// Component imports
import Header from "./components/UI/Header/Header.component";
import TodoInputForm from "./components/TodosFunctionality/TodoInputForm.component";
import TaskList from "./components/TodosFunctionality/TaskList.Component";
// styles imports
import classes from './App.module.scss';
import CompletedTasks from "./components/TodosFunctionality/CompletedTasks.component";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <TodoInputForm />
      <section className={classes.tasks}>
        <TaskList />
        <CompletedTasks />
      </section>
    </div>
  );
}

export default App;
