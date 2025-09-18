import { zodResolver } from '@hookform/resolvers/zod';
import { OrderDetails } from '@/models/order-details';
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

export function OrderForm({ handleOrderSubmit }: { handleOrderSubmit: (details: OrderDetails) => void }) {
  const onOrderSubmit = (order: OrderDetails) => handleOrderSubmit(order);

  const form = useForm<OrderDetails>({
    resolver: zodResolver(OrderDetails),
    defaultValues: {
      address: '',
      name: '',
      phone: '',
    },
  });

  return (
    <div>
      <h2 className="mt-2 font-semibold dark:text-white text-xl">Create Order</h2>
      <Form {...form}>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={form.handleSubmit(onOrderSubmit)}
          className="space-y-8 py-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="dark:text-white">Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="dark:text-white">Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel className="dark:text-white">Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>

  );
}