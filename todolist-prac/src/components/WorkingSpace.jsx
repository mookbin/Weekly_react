import React from "react";
import Todo from "./Todo";

const WorkingSpace = ({ todo, clickDeleteHandler, doneClickHandler }) => {
  return (
    <div className="working-space">
      <h2>Working ☠️</h2>
      <div className="lists">
        {todo
          .filter((item) => !item.isDone)
          .map((item) => (
            <Todo
              key={item.id}
              item={item}
              clickDeleteHandler={clickDeleteHandler}
              doneClickHandler={doneClickHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default WorkingSpace;
