import { CategoryButton, NavbarContainer } from "../Styles";
interface navbarProps {
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

const Navbar = ({ activeCategory, handleCategoryChange }: navbarProps) => {
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
    </NavbarContainer>
  );
};

export default Navbar;
