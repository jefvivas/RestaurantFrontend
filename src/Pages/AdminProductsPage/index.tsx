import ProductTable from "../../Components/Table/index";
import { CellProps, Column } from "react-table";
import { Product } from "../../Interfaces";
import { useProduct } from "../../Contexts/Products";
import useAdminAuth from "../../Hooks/useAdminAuth";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  editProduct,
  getProducts,
} from "../../Services/Product";
import { MoreIcon } from "./styles";
import styled from "styled-components";
import EditProductModal from "../../Components/Modals/EditProductModal";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 9999;
  justify-content: center;
  text-align: center;
`;

const AdminProducts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const isAuthenticated = useAdminAuth();
  const { products, setProducts } = useProduct();

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        try {
          const productsResponse = await getProducts({ onlyAvailable: false });

          setProducts(productsResponse);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, setProducts]);

  const handleAction = (product: Product) => {
    console.log(product);
    setSelectedProduct(product);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenEditModal = (product: Product) => {
    console.log("Editar produto:", product);

    setIsMenuOpen(false);
    setIsEditing(true);
  };

  const handleDelete = async (product: Product) => {
    try {
      await deleteProduct({ id: product.id });
      const updatedProducts = products.filter((p) => p.id !== product.id);

      setProducts(updatedProducts);

      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = async (editedProduct: Product) => {
    if (!editedProduct) return;

    try {
      await editProduct(editedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editedProduct.id ? editedProduct : product
        )
      );
      setIsMenuOpen(false);
      setIsEditing(true);
    } catch (error) {
      console.error("Error updating product:", error);
    }
    setIsEditing(false);
  };

  const columns: Column<Product>[] = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Available",
      accessor: "isAvailable",
      Cell: ({ row }: CellProps<Product, boolean | undefined>) => {
        return row.original.isAvailable ? <span>Y</span> : <span>N</span>;
      },
    },
    {
      Header: "Action",
      Cell: ({ row }: CellProps<Product, string>) => (
        <MoreIcon onClick={() => handleAction(row.original)} />
      ),
    },
  ];

  return (
    <>
      <ProductTable data={products} columns={columns} />
      {isMenuOpen && !isEditing && (
        <StyledModal>
          <h2>{selectedProduct?.name}</h2>
          <button
            onClick={() =>
              selectedProduct && handleOpenEditModal(selectedProduct)
            }
          >
            Edit
          </button>
          <button
            onClick={() => selectedProduct && handleDelete(selectedProduct)}
          >
            Delete
          </button>
        </StyledModal>
      )}

      {isEditing && (
        <EditProductModal
          product={selectedProduct}
          onSave={handleEdit}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default AdminProducts;
