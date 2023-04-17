import React from "react";
import Todo from "./Todo";

const DoneSpace = ({ todo, clickDeleteHandler, doneClickHandler }) => {
  return (
    <div className="done-space">
      <h2>Done 👽</h2>
      <div className="lists">
        {todo
          .filter((item) => item.isDone)
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
export default DoneSpace;
