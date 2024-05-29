import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePwChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      return alert("정보를 입력해주세요");
    }
  };

  const handlePwConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePwChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handlePwConfirmChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default App;
