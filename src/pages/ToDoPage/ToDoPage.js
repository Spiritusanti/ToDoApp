import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../redux/todo-slice";
import "./ToDoPage.styles.scss";
import InputForm from "../../components/TodosFunctionality/InputForm/inputform.component";
import List from "../../components/TodosFunctionality/List/List.component";
const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const todosHandler = (todo) => {
    dispatch(todoActions.addTodo(todo));
  };

  return (
    <div className="td-container">
      <InputForm onSubmit={todosHandler} />
      <div className="content">
        <List todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
