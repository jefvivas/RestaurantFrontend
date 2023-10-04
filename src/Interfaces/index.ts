import { Column } from 'react-table';

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

export interface loginResponse {
  message?: string;
  token?: string;
}

export interface tableLoginProps {
  number: string;
  password: string;
}

export interface adminLoginProps {
  username: string;
  password: string;
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
  isLoading?: boolean;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  text: string;
}

export interface logErrorProps {
  type: string;
  message: string;
}

interface OrderItem {
  productId: string;
  quantity: number;
}

export interface logOrderProps {
  orderedItems: OrderItem[];
  total: number;
}

export interface JwtPayload {
  unique_name: string;
  nbf: number;
  exp: number;
  iat: number;
}

export interface createProductProps {
  name: string;
  price: number;
  description: string;
  category: string;
  isAvailable: boolean;
}

export interface getProductsProps {
  onlyAvailable: boolean;
}

export interface ProductTableProps {
  data: Product[]; 
  columns: Column<Product>[];
}
