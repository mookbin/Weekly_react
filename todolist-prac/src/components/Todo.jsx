import React from "react";

const Todo = ({ item, clickDeleteHandler, doneClickHandler }) => {
  return (
    <div key={item.id}>
      {item.title} - {item.body}
      <button onClick={() => doneClickHandler(item.id)}>
        {item.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => clickDeleteHandler(item.id)}>삭제</button>
    </div>
  );
};

export default Todo;
