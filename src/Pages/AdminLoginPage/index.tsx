import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, LoginContainer, LoginForm } from "./styles";
import RequestButton from "../../Components/RequestButton";
import { adminLogin } from "../../Services/Login/index";
import { setAdminToken } from "../../Utils";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const redirectToOtherPage = () => {
    navigate("/admin/services");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await adminLogin({ username, password });

      if (response.token && response.hasOwnProperty("token")) {
        const token = response.token;
        setAdminToken(token);

        redirectToOtherPage();
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Admin Login</h2>
        <InputField
          type="text"
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

export default AdminLoginPage;
