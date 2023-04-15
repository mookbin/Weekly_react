import React from "react";

function Child({ age, name, children }) {
  console.log(name);
  console.log(age);
  console.log(children);
  return <div>Child</div>;
}
Child.defaultProps = {
  age: "기본나이",
};
// 값이 안내려오는 경우에 기본나이를 출력하도록 설정해서 undefined가 찍히는 걸 방지
//자주 쓰진 않는 듯

export default Child;

//return 문 안에 jsx 쓰는 건 파일을 .jsx 로 바꿔주는게 협업할 때 편하다.
// 어떤 것이 컴포넌트 파일인지 바로 알 수 있기 떄문
