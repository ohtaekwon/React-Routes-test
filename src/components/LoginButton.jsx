import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  function login() {
    navigate("/login");
  }

  return <button onClick={login}>로그인하기</button>;
}
