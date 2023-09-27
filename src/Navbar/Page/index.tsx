import {
  CategoryButton,
  NavbarContainer,
  OrderButton,
  OrderButtonContainer,
  OrderButtonText,
} from "../Styles";
import { useState } from "react";
import Modal from "../../Components/Modal/Page";
import { FiClock } from "react-icons/fi";
import { navbarProps } from "../../Interfaces";

const Navbar = ({ activeCategory, handleCategoryChange }: navbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <OrderButton onClick={openModal}>
        <OrderButtonContainer>
          <FiClock size={20} />
          <OrderButtonText>Order History</OrderButtonText>
        </OrderButtonContainer>
      </OrderButton>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </NavbarContainer>
  );
};

export default Navbar;
