import { useTable } from "react-table";
import { Product, ProductTableProps } from "../../Interfaces";
import { Table, TableCell, TableHeader, TableRow } from "../Table/styles";

const ProductTable = ({ data, columns }: ProductTableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Product>({
      columns,
      data,
    });

  return (
    <Table {...getTableProps()} className="my-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <TableHeader {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableHeader>
              );
            })}
          </TableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.column.id === "actions"
                      ? cell.render("Cell")
                      : cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ProductTable;
