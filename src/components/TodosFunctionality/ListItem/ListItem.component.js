import "./ListItem.styles.scss";

const ListItem = (props) => {
  const { task, date, description } = props;
  const removeTodo = () => {};
  return (
    <div className="listItem">
      <div className="close-wrapper">
        <span onClick={removeTodo}>×</span>
      </div>
      <h2 className="task">{task}</h2>
      <div className="info-container">
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
      <div className="actions-container">
        <button handleClick={() => {}}>Complete ToDo</button>
      </div>
    </div>
  );
};

export default ListItem;
