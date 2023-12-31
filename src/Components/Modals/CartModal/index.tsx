import { useState, useEffect } from "react";
import {
  CloseButton,
  ItemSection,
  ModalContent,
  ModalOverlay,
  RequestCloseButtonContainer,
  RequestButton,
  PriceSection,
  ProductLine,
  ProductList,
  TotalSection,
} from "./styles";
import { ModalProps } from "../../../Interfaces";
import { useProduct } from "../../../Contexts/Products";
import { useCart } from "../../../Contexts/Cart";
import { productsRequest } from "../../../Services/Table";
import { logError } from "../../../Services/Log";

const CartModal = ({ isOpen, closeModal }: ModalProps) => {
  const { cart, setCart } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { products } = useProduct();

  useEffect(() => {
    if (cart.length > 0 && products) {
      const total = cart.reduce((acc, product) => {
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
  }, [cart, products]);

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  if (!isOpen) return null;

  const handleSendRequest = async () => {
    try {
      await productsRequest(cart);
      setCart([]);
      setTotalPrice(0);
      closeModal();
    } catch (e: any) {
      await logError({ type: "product_request_error", message: e.message });
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

          {cart.length > 0 ? (
            cart.map((product, index) => {
              const matchingProduct = products?.find(
                (p) => p.id === product.productId
              );
              return (
                <ProductLine key={index}>
                  <div>
                    {product.quantity} x{" "}
                    {matchingProduct ? matchingProduct.name : "Not Found"}
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
        <RequestCloseButtonContainer>
          <RequestButton onClick={handleSendRequest}>
            Send request
          </RequestButton>
          <CloseButton onClick={closeModal}>Close</CloseButton>
        </RequestCloseButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CartModal;
