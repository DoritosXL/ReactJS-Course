// import { useOrdersQuery } from "@/Queries/query-orders";
import { useAppSelector } from "../Store";

export const AllOrders = () => {
  const orders = useAppSelector((state) => state.order);
  return <pre className="dark:text-white">{JSON.stringify(orders, null, 2)}</pre>;
};