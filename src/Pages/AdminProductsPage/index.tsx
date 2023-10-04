import ProductTable from "../../Components/Table/index";
import {CellProps, Column} from 'react-table'
import {Product} from '../../Interfaces'
import {useProduct} from '../../Contexts/Products'
import useAdminAuth from "../../Hooks/useAdminAuth";
import { useEffect } from "react";
import { getProducts } from "../../Services/Product";
import {MoreIcon} from './styles'



const AdminProducts = () => {
  const isAuthenticated = useAdminAuth();
  const {products,setProducts} = useProduct()

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
  };

  const columns: Column<Product>[] = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Action',
      Cell: ({ row }: CellProps<Product, string>) => (
        <MoreIcon onClick={()=>handleAction(row.original)}/>
      ),
    },
    
  ];

  return (
    <>
      <ProductTable data={products} columns={columns} />
    </>
  );
};

export default AdminProducts;
