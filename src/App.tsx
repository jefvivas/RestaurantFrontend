import LoginPage from "./Pages/LoginPage";
import Products from "./Pages/Products";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminProducts from './Pages/AdminProductsPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/services" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
