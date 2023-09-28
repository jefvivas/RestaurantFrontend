import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../ProductCard/Page";
import Navbar from "../../Navbar/Page";
import { CategoryHeader, GroupContainer, PageContainer } from "../Styles";
import { getAllProducts } from "../../Services/Product";
import { Product } from "../../Interfaces";
import { useProduct } from "../../Contexts/Products";

const Products = () => {
  const isAuthenticated = useAuth();
  const { products, setProducts } = useProduct();

  const [productQuantities, setProductQuantities] = useState<{
    [productId: string]: number;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        try {
          const productsResponse = await getAllProducts();

          setProducts(productsResponse);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, setProducts]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    setProductQuantities({
      ...productQuantities,
      [productId]: newQuantity,
    });
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
      <Navbar />
      {products && (
        <>
          {getUniqueCategories(products).map((category) => (
            <GroupContainer key={category}>
              <CategoryHeader>{category}</CategoryHeader>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard
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
