import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductContainer from "../../ProductCard/Page";
import Navbar from "../../Navbar/Page";
import { CategoryHeader, GroupContainer, PageContainer } from "../Styles";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

const Products = () => {
  const isAuthenticated = useAuth();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productQuantities, setProductQuantities] = useState<{
    [productId: string]: number;
  }>({});
  const [activeCategory, setActiveCategory] = useState<string>("Food");

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        const token = localStorage.getItem("token");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        try {
          const response = await axios.get(
            "http://localhost:5123/product",
            config
          );

          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  const getUniqueCategories = (products: Product[]): string[] => {
    const uniqueCategories: string[] = [];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });
    return uniqueCategories;
  };

  return (
    <PageContainer>
      <Navbar
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />
      {products && (
        <>
          {getUniqueCategories(products).map((category) => (
            <GroupContainer key={category}>
              <CategoryHeader>{category}</CategoryHeader>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductContainer
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    quantity={productQuantities[product.id] || 0}
                    setQuantity={(newQuantity: number) =>
                      handleQuantityChange(product.id, newQuantity)
                    }
                  />
                ))}
            </GroupContainer>
          ))}
        </>
      )}
    </PageContainer>
  );
};

export default Products;
