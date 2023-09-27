export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export interface ProductRequestProps {
  productId: string;
  quantity: number;
}

export interface navbarProps {
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

export interface loginResponse {
  message?: string;
  token?: string;
}

export interface loginProps {
  number: string;
  password: string;
}

export interface ProductRequestProps {
  productId: string;
  quantity: number;
}

export interface ProductRequestItems {
  items: ProductRequestProps[];
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}

export interface RequestButtonProps {
  isLoading: boolean;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  text: string;
}

export interface logErrorProps {
  type: string;
  message: string;
}
