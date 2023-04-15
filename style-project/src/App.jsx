import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  //추가 버튼
  const clickAddButtonHandler = () => {
    // 새로운 형태의 newUser 만든다.
    // newUser : { id: 1, age: 30, name: "어쩌구" },
    //2. newUser 배열에 더한다

    const newUser = {
      id: users.length + 1,
      age: age,
      //입력된 age, state에 있는 age를 가져와라
      name,
      //키와 value 값 같으면 생략 가능
    };

    setUsers([...users, newUser]);
    //원래 있던 users를 풀고 거기에 newUser 더해준다 그다음 다시 배열로 만들어주기 (불변성 유지)
  };

  //삭제 버튼
  const clickRemoveButtonHandler = (id) => {
    // const newUsers = users.filter((user) => user.id !== id);
    const newUsers = users.filter(function (user) {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  return (
    <div>
      <div>
        이름 : &nbsp;
        <input value={name} onChange={(event) => nameChangeHandler(event)} />
        <br />
        나이 : &nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <User
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
