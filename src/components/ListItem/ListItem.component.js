import React, { useState } from "react";
import { ACTIONS } from "../../pages/ToDoPage/ToDoPage";
import CustomButton from "../CustomButton/CustomButton.component";
import "./ListItem.styles.scss";

const ListItem = ({ todo, dispatch }) => {
  const [notes, setNotes] = useState("Add notes");
  return (
    <div className="listItem">
      <h2
        className="task"
        style={{ color: todo.complete ? "orange" : "#CDE2B8" }}
      >
        {todo.name}
      </h2>
      <div
        className="info-container"
        style={{ color: todo.complete ? "orange" : "#CDE2B8" }}
      >
        <p>{notes}</p>
      </div>
      <div className="actions-container">
        <CustomButton
          text={"complete"}
          handleClick={() => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          }}
        />
        <CustomButton
          text={"remove"}
          handleClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        />
      </div>
    </div>
  );
};

export default ListItem;
