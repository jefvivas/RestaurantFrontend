import {
  CategoryButton,
  NavbarContainer,
  OrderButton,
  OrderButtonContainer,
  OrderButtonText,
  CartButton,
} from "../Styles";
import { useState } from "react";
import OrderModal from "../../Components/Modals/OrderModal/Page";
import CartModal from "../../Components/Modals/CartModal/Page";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { navbarProps } from "../../Interfaces";

const Navbar = ({ activeCategory, handleCategoryChange }: navbarProps) => {
  const [isOrderListOpen, setIsOrderListOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleOrderModal = () => {
    setIsOrderListOpen(!isOrderListOpen);
  };

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <NavbarContainer>
      <CategoryButton
        onClick={() => handleCategoryChange("Food")}
        style={{ fontWeight: activeCategory === "Food" ? "bold" : "normal" }}
      >
        Food
      </CategoryButton>
      <CategoryButton
        onClick={() => handleCategoryChange("Drink")}
        style={{ fontWeight: activeCategory === "Drink" ? "bold" : "normal" }}
      >
        Drink
      </CategoryButton>
      <CategoryButton
        onClick={() => handleCategoryChange("Service")}
        style={{ fontWeight: activeCategory === "Service" ? "bold" : "normal" }}
      >
        Service
      </CategoryButton>
      <OrderButton onClick={toggleOrderModal}>
        <OrderButtonContainer>
          <FiClock size={20} />
          <OrderButtonText>Order History</OrderButtonText>
        </OrderButtonContainer>
      </OrderButton>
      <CartButton onClick={toggleCartModal}>
        <FiShoppingCart size={20} />
      </CartButton>
      <OrderModal isOpen={isOrderListOpen} closeModal={toggleOrderModal} />
      <CartModal isOpen={isCartOpen} closeModal={toggleCartModal} />
    </NavbarContainer>
  );
};

export default Navbar;
