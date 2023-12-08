import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/user/userSlice";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = async () => {
    const result = await axios.post('http://localhost:8088/user/login', loginForm, {
      withCredentials: true 
      // withCredentials 설정 안하면 다른 도메인간에
      // 응답에 Set-Cookie가 내려와도 브라우저에 저장이 안됨
      // 요청을 보낼 때도 쿠키가 안보내짐
    });
    console.log(result);

    const { flag, message, user } = result.data;

    if (!flag) {
      return alert('로그인 실패');
    }

    dispatch(loginSuccess(user));
    navigate(location.state?.from?.pathname || '/');
  };

  return (
    <>
      <input 
        type="text"
        name="username"
        value={loginForm.username}
        onChange={handleChangeLoginForm}
      />
      <br />
      <input 
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleChangeLoginForm}
      />
      <br />
      <button type="button" onClick={handleLogin}>로그인</button>
    </>
  );
}

export default Login;