import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtVerify } from "jose";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenIsValid = (token: string) => {
      try {
        const secretKey = new TextEncoder().encode(
          "08D856F45E32C98D0AA162BBD99E99D5"
        );
        jwtVerify(token, secretKey);

        navigate("/products");
        return true;
      } catch (error) {
        return false;
      }
    };

    const token = localStorage.getItem("token");
    if (token && tokenIsValid(token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/");
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;
