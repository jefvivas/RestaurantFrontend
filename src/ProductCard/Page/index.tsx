import {
  Name,
  PageContent,
  PriceContainer,
  QuantityControlButton,
  QuantityControlWrapper,
  QuantityInput,
  Description,
  RequestButtonWrapper,
} from "../Styles/index";
import { useState } from "react";
import RequestButton from "../../Components/RequestButton";
import { productsRequest } from "../../Services/Table";
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

    try {
      await productsRequest({ productId: id, quantity });
      setQuantity(0);
    } catch (e) {
      console.log(`error : ${e}`);
    }
    setLoading(false);
  };

  return (
    <PageContent>
      <Name>{name}</Name>
      <Description> {description}</Description>
      <PriceContainer>
        <div>R$: {price.toFixed(2)}</div>
        <QuantityControlWrapper>
          <QuantityControlButton onClick={handleDecrease}>
            -
          </QuantityControlButton>
          <QuantityInput
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
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
