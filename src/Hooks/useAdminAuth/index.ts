import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtVerify } from "jose";
import { environment } from "../../Constants";

const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenIsValid = (token: string) => {
      try {
        const secretKey = new TextEncoder().encode(environment.ADMIN_KEY);
        jwtVerify(token, secretKey);

        navigate("/admin/services");
        return true;
      } catch (error) {
        return false;
      }
    };

    const token = localStorage.getItem("adminToken");
    if (token && tokenIsValid(token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate("/admin");
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAdminAuth;
