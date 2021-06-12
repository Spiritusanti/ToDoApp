import React from "react";
import ListItem from "../ListItem/ListItem.component";
import "./List.styles.scss";

const List = ({todos}) => {
  return (
    <div className="ListItems">
      <h2>To Do List</h2>
      <div className="todos-container">
        {todos.map((todo) => {
          return <ListItem key={todo.id} task={todo.task} date={todo.date} description={todo.description} />;
        })}
      </div>
    </div>
  );
};

export default List;
