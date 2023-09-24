import { useState, useEffect } from "react";
import { getTableProducts } from "../../Services/Table";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  products: Product[] | null;
}

interface ProductRequestProps {
  productId: string;
  quantity: number;
}

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
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleCloseModal}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <p>Produtos da Tabela:</p>
        <ul>
          {tableProducts.length > 0 ? (
            tableProducts.map((product, index) => {
              const matchingProduct = products?.find(
                (p) => p.id === product.productId
              );

              return (
                <li key={index}>
                  <p>
                    Produto:
                    {matchingProduct ? matchingProduct.name : "Não encontrado"}
                  </p>
                  <p>Quantidade: {product.quantity}</p>
                </li>
              );
            })
          ) : (
            <p>Carregando produtos...</p>
          )}
          {totalPrice > 0 && (
            <li>
              <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </li>
          )}
        </ul>
        <button onClick={closeModal}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
