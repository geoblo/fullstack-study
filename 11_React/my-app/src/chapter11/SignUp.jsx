// Quiz
// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

import { useState } from "react";

// 1. 이름 입력받기
// 이름을 입력할 수 있는 input 태그와 입력된 값을 저장하기 위한 name이라는 state를 정의(초기값 '')
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 이라는 이벤트 핸들러 정의

// 2. 성별 입력받기
// 성별을 입력받기 위한 select 태그와 gender라는 이름의 state를 정의(초기값 '남자')
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 라는 이벤트 핸들러 정의

// 3. 출력
// 이름과 성별을 입력하고 가입하기 버튼을 누를시 alert 창으로 입력된 이름과 성별 출력하기

// (선택 사항)
// 1) form 태그 및 submit 이벤트를 사용해도 되고 button 태그의 click 이벤트를 사용해도 됨
// 2) 각각의 state를 여러 개 만들어도 되고 객체 형태로 한번에 관리해도 됨

function SignUp() {
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('남자');

  // 객체 형태로 관리
  const [inputs, setInputs] = useState({
    name: '',
    gender: '남자'
  });
  const { name, gender } = inputs;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    // 방법1
    // const copyObj = {
    //   ...inputs
    // };
    // copyObj[name] = value;
    // setInputs(copyObj);

    // 방법2
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleChangeGender = (e) => {
  //   setGender(e.target.value);
  // };

  const handleSubmit = () => {
    alert(`이름: ${name}, 성별: ${gender}`);
  };

  return (
    <form>
      <label>
        이름:
        {/* <input type="text" onChange={handleInputChange} value={name} /> */}
        <input type="text" name="name" onChange={handleInputChange} value={name} />
      </label>

      <br />

      <label>
        성별:
        {/* <select onChange={handleInputChange} value={gender}> */}
        <select name="gender" onChange={handleInputChange} value={gender}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>

      <div>
        <button type="button" onClick={handleSubmit}>가입하기</button>
      </div>
    </form>
  );
}

export default SignUp;