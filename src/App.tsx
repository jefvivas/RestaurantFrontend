import LoginPage from "./LoginPage/Page";
import Products from "./Products/Page";
import AdminLoginPage from "./AdminLoginPage/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
