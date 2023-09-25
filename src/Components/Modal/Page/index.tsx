import { useState, useEffect } from "react";
import { getTableProducts } from "../../../Services/Table";
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
} from "../Styles";
import { ModalProps, ProductRequestProps } from "../../../Interfaces";

const Modal = ({ isOpen, closeModal, products }: ModalProps) => {
  const [tableProducts, setTableProducts] = useState<ProductRequestProps[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

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
            <p>Carregando produtos...</p>
          )}
          {totalPrice > 0 && (
            <ProductLine>
              <ItemSection>Total:</ItemSection>
              <TotalSection>R$ {totalPrice.toFixed(2)}</TotalSection>
            </ProductLine>
          )}
        </ProductList>
        <PayCloseButtonContainer>
          <PayButton>Pagar</PayButton>
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
        </PayCloseButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
