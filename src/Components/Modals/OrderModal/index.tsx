import { useState, useEffect } from "react";
import { getTableProducts, resetTable } from "../../../Services/Table";
import { logError, logOrder } from "../../../Services/Log";
import {
  CloseButton,
  ItemSection,
  ModalContent,
  ModalOverlay,
  PayButton,
  PayCloseButtonContainer,
  PriceSection,
  ProductLine,
  ProductList,
  TotalSection,
} from "./styles";
import { ModalProps, ProductRequestProps } from "../../../Interfaces";
import { useProduct } from "../../../Contexts/Products";
import { removeToken, getDecodedToken, getToken } from "../../../Utils";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  const [tableProducts, setTableProducts] = useState<ProductRequestProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { products } = useProduct();
  const navigate = useNavigate();

  const getProducts = async () => {
    const response = await getTableProducts();
    setTableProducts(response.items);
  };

  useEffect(() => {
    if (isOpen) {
      getProducts();
    }
  }, [isOpen]);

  useEffect(() => {
    if (tableProducts.length > 0 && products) {
      const total = tableProducts.reduce((acc, product) => {
        const matchingProduct = products.find(
          (p) => p.id === product.productId
        );
        if (matchingProduct) {
          return acc + matchingProduct.price * product.quantity;
        }
        return acc;
      }, 0);

      setTotalPrice(total);
    }
  }, [tableProducts, products]);

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  if (!isOpen) return null;

  const handlePay = async () => {
    const token = getToken();
    const decodedToken = getDecodedToken(token);
    try {
      await logOrder({ orderedItems: tableProducts, total: totalPrice });
      await resetTable(decodedToken);
      setTableProducts([]);
      setTotalPrice(0);
      removeToken();
      navigate("/");
    } catch (e: any) {
      await logError({ message: e.message, type: "log_error" });
    }
  };

  return (
    <ModalOverlay onClick={handleCloseModal}>
      <ModalContent>
        <ProductList>
          <ProductLine>
            <ItemSection>Item</ItemSection>
            <PriceSection>Price</PriceSection>
          </ProductLine>

          {tableProducts.length > 0 ? (
            tableProducts.map((product, index) => {
              const matchingProduct = products?.find(
                (p) => p.id === product.productId
              );
              return (
                <ProductLine key={index}>
                  <div>
                    {product.quantity} x{" "}
                    {matchingProduct ? matchingProduct.name : "Não encontrado"}
                  </div>
                  <div>{matchingProduct?.price}</div>
                </ProductLine>
              );
            })
          ) : (
            <></>
          )}
          {totalPrice > 0 && (
            <ProductLine>
              <ItemSection>Total:</ItemSection>
              <TotalSection>R$ {totalPrice.toFixed(2)}</TotalSection>
            </ProductLine>
          )}
        </ProductList>
        <PayCloseButtonContainer>
          <PayButton onClick={handlePay}>Pay</PayButton>
          <CloseButton onClick={closeModal}>Close</CloseButton>
        </PayCloseButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
