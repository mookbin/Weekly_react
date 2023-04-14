import React from "react";

function Layout(props) {
  return (
    <>
      <header
        style={{
          margin: "10px",
          border: "1px solid red",
        }}
      >
        항상 출력되는 머릿글입니다.
      </header>
      {props.children}
    </>
  );
}
export default Layout;

// 항상 어느 페이지든간에 들어와야한다면 Layout 밑에 항상 children을  받으면 된다.
