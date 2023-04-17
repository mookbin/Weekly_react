import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "과제끝내기", body: "투두리스트 만들기", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const addClickButtonHandler = () => {
    const newTodos = {
      id: todos.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, newTodos]);

    setTitle("");
    setBody("");
  };

  const deleteClickButtonHandler = (wow) => {
    const newTodo = todos.filter((todo) => {
      return todo.id !== wow;
    });
    setTodos(newTodo);
  };

  const doneClickButtonHandler = (wow) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === wow) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(newTodo);
  };

  return (
    <div>
      <div>
        <label>제목 : </label>
        <input value={title} onChange={titleChangeHandler}></input>
        <label>내용 : </label>
        <input value={body} onChange={bodyChangeHandler}></input>
        <button onClick={addClickButtonHandler}>추가</button>
      </div>
      <div className="working-space">
        <h2>Working</h2>
        {todos
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <div key={item.id}>
                {item.title}-{item.body}
                <button onClick={() => doneClickButtonHandler(item.id)}>
                  {item.isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => deleteClickButtonHandler(item.id)}>
                  {/* key값을 매개변수로 넣어줘서 보내자  */}
                  삭제
                </button>
              </div>
            );
          })}
      </div>
      <div className="Done-space">
        <h2>Done</h2>
        {todos
          .filter((item) => item.isDone)
          .map((item) => (
            <div key={item.id}>
              {item.title}-{item.body}
              <button onClick={() => doneClickButtonHandler(item.id)}>
                {item.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => deleteClickButtonHandler(item.id)}>
                삭제
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
