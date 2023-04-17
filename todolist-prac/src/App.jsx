import React, { useState } from "react";
import "./App.css";
import WorkingSpace from "./components/WorkingSpace";
import DoneSpace from "./components/DoneSpace";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "과제끝내기", body: "todoList 만들기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const clickAddHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      body,
      isDone: false,
    };

    setTodo([...todo, newTodo]);

    setTitle("");
    setBody("");
  };

  const clickDeleteHandler = (id) => {
    const newTodo = todo.filter(function (todo) {
      return todo.id !== id;
    });
    setTodo(newTodo);
  };

  const doneClickHandler = (id) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="input-space">
        <label>제목 :</label>
        <input value={title} onChange={titleChangeHandler} />
        <label>내용 :</label>
        <input value={body} onChange={bodyChangeHandler} />
        <button onClick={clickAddHandler}>추가</button>
      </div>
      <WorkingSpace
        todo={todo}
        clickDeleteHandler={clickDeleteHandler}
        doneClickHandler={doneClickHandler}
      />
      <DoneSpace
        todo={todo}
        clickDeleteHandler={clickDeleteHandler}
        doneClickHandler={doneClickHandler}
      />
    </div>
  );
}

export default App;
