export type TProductsTableProps = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsTable({
  id,
  name,
  price,
}: TProductsTableProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>R${price}</td>
    </tr>
  );
}
