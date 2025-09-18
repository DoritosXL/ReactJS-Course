import { useOrdersQuery } from "@/Queries/query-orders";

export const AllOrders = () => {
  const { orders } = useOrdersQuery();
  return <pre className="dark:text-white">{JSON.stringify(orders, null, 2)}</pre>;
}