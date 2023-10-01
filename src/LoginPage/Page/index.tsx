import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, LoginContainer, LoginForm } from "../Styles";
import RequestButton from "../../Components/RequestButton";
import { tableLogin } from "../../Services/Login/index";
import { setToken } from "../../Utils";

const LoginPage = () => {
  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate("/products");
  };

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await tableLogin({ number, password });

      if (response.token && response.hasOwnProperty("token")) {
        const token = response.token;
        setToken(token);

        redirectToOtherPage();
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <InputField
          type="text"
          placeholder="Mesa"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RequestButton onClick={handleLogin} isLoading={false} text="Log in" />
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
