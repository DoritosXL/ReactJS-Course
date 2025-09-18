import type { OrderDetails } from "@/models/order-details"
import { AllOrders } from "./AllOrders"
import { OrderForm } from "./OrderForm"

export const OrderPage = ({ handleOrderSubmit }: { handleOrderSubmit: (details: OrderDetails) => void }) => {
  return (
    <div className="p-4">
      <h1 className="font-semibold dark:text-white text-2xl">Order</h1>
      <OrderForm handleOrderSubmit={handleOrderSubmit} />
      <AllOrders />
    </div>
  )
}