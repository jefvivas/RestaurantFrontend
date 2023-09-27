import {
  Name,
  PageContent,
  PriceContainer,
  QuantityControlButton,
  QuantityControlWrapper,
  QuantityInput,
  Description,
} from "../Styles/index";
import RequestButton from "../../Components/RequestButton";
import { ProductCardProps } from "../../Interfaces";
import { useCart } from "../../Contexts/Cart";

const ProductCard = ({
  id,
  name,
  price,
  description,
  quantity,
  setQuantity,
}: ProductCardProps) => {
  const { cart, setCart } = useCart();

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = async () => {
    if (quantity <= 0) return;

    const existingCartItemIndex = cart.findIndex(
      (item) => item.productId === id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { productId: id, quantity }]);
    }

    setQuantity(0);
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
      <RequestButton onClick={handleAddToCart} text="Add to Cart" />
    </PageContent>
  );
};

export default ProductCard;
