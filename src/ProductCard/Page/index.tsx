import axios from "axios";
import {
  Name,
  PageContent,
  PriceContainer,
  QuantityControlButton,
  QuantityControlWrapper,
  QuantityInput,
} from "../Styles/index";
import { useState } from "react";
import RequestButton from "../../Components/RequestButton";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  description,
  quantity,
  setQuantity,
}: Product) => {
  const [loading, setLoading] = useState(false);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleRequest = async () => {
    if (quantity <= 0) return;
    setLoading(true);
    const requestPayload = {
      Items: [
        {
          ProductId: id,
          Quantity: quantity,
        },
      ],
    };
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post("http://localhost:5123/consume", requestPayload, config);
      setQuantity(0);
    } catch (e) {
      console.log(`error : ${e}`);
    }
    setLoading(false);
  };

  return (
    <PageContent>
      <Name>{name}</Name>
      <p>Description: {description}</p>
      <PriceContainer>
        <div>R$: {price.toFixed(2)}</div>
        <QuantityControlWrapper>
          <QuantityControlButton onClick={handleDecrease}>
            -
          </QuantityControlButton>
          <QuantityInput type="number" value={quantity} readOnly />
          <QuantityControlButton onClick={handleIncrease}>
            +
          </QuantityControlButton>
        </QuantityControlWrapper>
      </PriceContainer>
      <RequestButton
        onClick={handleRequest}
        isLoading={loading}
        text="Request"
      />
    </PageContent>
  );
};

export default ProductCard;
