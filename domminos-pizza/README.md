# Learning goals - Develop Applications Using the ReactJS Framework

This document outlines the learning goals for the ReactJS course, covering key concepts and skills for building modern web applications. This project, "Domino's Pizza," serves as a practical implementation of these goals.

## Learning Goals in Practice

### Compose interactive applications using ReactJS

The application is composed of several interacting components. The main `App.tsx` file sets up the basic structure, including error boundaries and suspense for asynchronous operations, and then hands off to `PizzaDataHandler` to manage the core application logic.

```tsx
// src/App.tsx
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PizzaDataHandler } from './components/PizzaDataHandler/PizzaDataHandler';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 min-h-screen">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense
          fallback={<div className="dark:text-white">Loading...</div>}
        >
          <PizzaDataHandler />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

### Employ TypeScript, ESLint and Prettier to improve code quality

The project is fully typed with TypeScript and uses ESLint and Prettier to enforce code style and catch errors early. The configuration for these tools can be found in `tsconfig.json`, `eslint.config.js`, and `prettier.config.js`.

### Compose a React component using JSX

Components are written using JSX to create a declarative and readable UI. The `PizzaItem` component is a great example of a presentational component that takes props and renders a pizza's details.

```tsx
// src/components/PizzaList/PizzaItem/PizzaItem.tsx
import type { Pizza } from '@/gql/graphql'
import { NavLink } from 'react-router'

export const PizzaItem = ({
    name,
    description,
    price,
    pictureUrl,
    id,
}: Pizza) => {
    return (
        <div className="m-2 flex h-full flex-col items-center rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <img
                src={pictureUrl}
                width={100}
                height={100}
                style={{ objectFit: 'cover', borderRadius: '8px' }}
                alt={name}
            />
            <p className="dark:text-white">{name}</p>
            <p className="dark:text-gray-300">{description}</p>
            <p className="text-lg font-bold text-red-500">$ {price}</p>
            <NavLink
                className="mt-auto rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                to={`/pizza/${id}`}
            >
                details
            </NavLink>
        </div>
    )
}
```

### Elaborate on the context of the current ReactJS ecosystem

The project leverages several popular libraries from the React ecosystem:
- **`react-router-dom`** for client-side routing.
- **`urql`** as a GraphQL client for data fetching.
- **`zod`** for schema validation.
- **`react-hook-form`** for building robust and accessible forms.
- **`tailwindcss`** for utility-first styling.
- **`vitest`** for unit and component testing.

### Implement _local_ state using React hooks

Local component state is managed with the `useState` hook. In `PizzaList.tsx`, `useState` is used to manage the state of a new pizza being added.

```tsx
// src/components/PizzaList/PizzaList.tsx
import type { Pizza } from '@/gql/graphql'
import { useState } from 'react'
import { PizzaItem } from './PizzaItem/PizzaItem'

// ...

export const PizzaList = ({
    chosenPizzas,
    setChosenPizzas,
}: PizzaListProps) => {
    const [newPizza, setNewPizza] = useState<Pizza | null>(null)
    // ...
}
```

### Capture _application_ state using a state management library

Instead of Zustand, this project uses a combination of `useReducer` and `useContext` to manage the global state of chosen pizzas. This is a lightweight and effective way to manage application-level state.

```tsx
// src/components/Store/chosen-pizzas.tsx
import type { Pizza } from "@/gql/graphql";
import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react";

const ChosenPizzasContext = createContext<Pizza[]>([]);
const ChosenPizzasDispatchContext = createContext<Dispatch<ChosenPizzasDispatchAction>>(() => { });
export const useChosenPizzas = () => useContext(ChosenPizzasContext);
export const useChosenPizzasDispatch = () => useContext(ChosenPizzasDispatchContext);
export const ChosenPizzaProvider = ({ children }: PropsWithChildren) => {
  const [pizzas, dispatch] = useReducer(chosenPizzasReducer, []);
  return (
    <ChosenPizzasContext.Provider value={pizzas}>
      <ChosenPizzasDispatchContext.Provider value={dispatch}>
        {children}
      </ChosenPizzasDispatchContext.Provider>
    </ChosenPizzasContext.Provider>
  );
};
// ...
```

### Derive side effects based on state using React hooks

The `usePizzas` custom hook encapsulates the logic for fetching pizza data from the GraphQL API. It uses the `useQuery` hook from `urql` to handle the asynchronous data fetching, caching, and state updates.

```tsx
// src/hooks/usePizzas.ts
import type { Pizza } from '@/gql/graphql'
import { gql, useQuery } from 'urql'

const PIZZAS_QUERY = gql`
    query GetPizzas {
        pizzas {
            id
            name
            price
            description
            pictureUrl
        }
    }
`
interface PizzasQueryData {
    pizzas: Pizza[]
}

export function usePizzas() {
    const [result] = useQuery<PizzasQueryData>({
        query: PIZZAS_QUERY,
    })

    return result
}
```

### Compose applications with reusable components using tailwindcss and shadcn/ui

The project uses `tailwindcss` for styling, as seen in the `PizzaItem` component. The use of utility classes allows for rapid development and easy maintenance. The project also uses `shadcn/ui` for some UI components, which are built on top of `tailwindcss`.

### Differentiate between controlled and uncontrolled form components.

The form for adding a new pizza in `PizzaList.tsx` is an example of a controlled component, where the state of the form inputs is managed by React state.

```tsx
// src/components/PizzaList/PizzaList.tsx
// ...
<input
    type="text"
    placeholder="Name"
    value={newPizza?.name || ''}
    onChange={(e) =>
        setNewPizza({
            ...newPizza,
            name: e.target.value,
        } as Pizza)
    }
    className="rounded border p-1 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    required
/>
// ...
```

### Implement resilient and performant data synchronization between client and server using urql

This project uses `urql` as a GraphQL client to fetch data from the server. `urql` provides features like caching and suspense to create a resilient and performant data layer. The client is configured in `urqlClient.ts`.

```tsx
// src/urqlClient.ts
import { Client, cacheExchange, fetchExchange } from 'urql'

export const client = new Client({
    url: 'http://localhost:3000/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
        headers: {
            'Content-Type': 'application/json',
        },
    },
    suspense: true,
})
```

### Implement real-world forms using React Hook Form and Zod

The `OrderForm` component uses `react-hook-form` to manage form state and validation. The form's validation rules are defined using `zod`, which provides a powerful and type-safe way to define schemas.

```tsx
// src/components/OrderPage/OrderForm.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { OrderDetails } from '@/models/order-details';
import { Button } from "../ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

export function OrderForm({ handleOrderSubmit }: { handleOrderSubmit: (details: OrderDetails) => void }) {
  const onOrderSubmit = (order: OrderDetails) => handleOrderSubmit(order);

  const form = useForm<OrderDetails>({
    mode: "onChange",
    resolver: zodResolver(OrderDetails),
    defaultValues: {
      address: '',
      name: '',
      phone: '',
    },
  });
//...
```

### Apply testing strategies and best practices to React components to implement unit tests with Vitest

The project is set up for testing with `vitest`. The configuration can be found in `vitest.config.js`, and `src/test-setup.ts` is used to set up the testing environment.