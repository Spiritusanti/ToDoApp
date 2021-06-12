import CustomButton from "../../UI/CustomButton/CustomButton.component";
import "./ListItem.styles.scss";

const ListItem = (props) => {
  const { task, date, description } = props;
  return (
    <div className="listItem">
      <h2 className="task">{task}</h2>
      <div className="info-container">
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
      <div className="actions-container">
        <CustomButton handleClick={() => {}}>Complete ToDo</CustomButton>
        <CustomButton handleClick={() => {}}>Remove ToDo</CustomButton>
      </div>
    </div>
  );
};

export default ListItem;
