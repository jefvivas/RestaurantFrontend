import { CategoryButton, NavbarContainer, BillButton } from "../Styles";
import { useState } from "react";
import Modal from "../../Components/Modal";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}
interface navbarProps {
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
  products: Product[] | null;
}

const Navbar = ({
  activeCategory,
  handleCategoryChange,
  products,
}: navbarProps) => {
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
      <BillButton onClick={openModal} />
      <Modal isOpen={isOpen} closeModal={closeModal} products={products} />
    </NavbarContainer>
  );
};

export default Navbar;
