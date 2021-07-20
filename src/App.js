// library imports
// Page imports
// Component imports
import Header from "./components/UI/Header/Header.component";
import TodoInputForm from "./components/TodosFunctionality/TodoInputForm.component";
import TaskList from "./components/TodosFunctionality/TaskList.Component";
// styles imports
import "./App.scss";

import { todos } from "./todos";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoInputForm />
      <TaskList taskList={todos} />
    </div>
  );
}

export default App;
