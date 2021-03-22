import './App.css';
import InputForm from './components/inputform.component';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Things you need to do!</h1>
      </header>
      <InputForm />
      <div className="ToDoList">
        <h1>To Do List:</h1>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
