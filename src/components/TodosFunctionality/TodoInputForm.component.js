import CustomButton from "../UI/CustomButton/CustomButton.component";

const TodoInputForm = () => {
  return (
    <form>
      <ul>
        <li>
          <label for="task">Enter Task:</label>
          <input id="task" type="text" />
        </li>
        <li>
          <label for="description">Enter details:</label>
          <input id="description" type="text" />
        </li>
      </ul>
      <CustomButton>Add Task</CustomButton>
    </form>
  );
};

export default TodoInputForm;
