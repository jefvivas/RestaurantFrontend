import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputField, LoginContainer, LoginForm } from "../Styles";
import RequestButton from "../../Components/RequestButton";

const LoginPage = () => {
  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate("/products");
  };

  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log("a");
      const response = await axios.post("http://localhost:5123/login", {
        Number,
        Password,
      });
      console.log("ac");

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);

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
          value={Number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RequestButton onClick={handleLogin} isLoading={false} text="Log in" />
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
