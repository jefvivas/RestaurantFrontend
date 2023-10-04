import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtVerify } from "jose";
import { environment } from "../../Constants";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenIsValid = (token: string) => {
      try {
        const secretKey = new TextEncoder().encode(environment.TABLE_KEY);
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
