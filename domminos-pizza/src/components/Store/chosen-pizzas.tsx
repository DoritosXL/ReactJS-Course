/* eslint-disable react-refresh/only-export-components */
import type { Pizza } from "@/gql/graphql";
import { usePizzas } from "@/hooks/usePizzas";
import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react";

const ChosenPizzasContext = createContext<Pizza[]>([]);
const ChosenPizzasDispatchContext = createContext<Dispatch<ChosenPizzasDispatchAction>>(() => { });

export const useChosenPizzas = () => useContext(ChosenPizzasContext);
export const useChosenPizzasDispatch = () => useContext(ChosenPizzasDispatchContext);

export const ChosenPizzaProvider = ({ children }: PropsWithChildren) => {
  const chosePizzas = usePizzas();
  const [pizzas, dispatch] = useReducer(chosenPizzasReducer, chosePizzas.data ? chosePizzas.data.pizzas : []);
  return (
    <ChosenPizzasContext.Provider value={pizzas}>
      <ChosenPizzasDispatchContext.Provider value={dispatch}>
        {children}
      </ChosenPizzasDispatchContext.Provider>
    </ChosenPizzasContext.Provider>
  );
};

export type ChosenPizzasDispatchAction =
  | { type: 'add'; pizza: Pizza }
  | { type: 'clear' };

function chosenPizzasReducer(
  pizzas: Pizza[],
  action: ChosenPizzasDispatchAction,
) {
  switch (action.type) {
    case 'add':
      return [...pizzas, action.pizza];
    case 'clear':
      return [];
    default:
      throw new Error('Unknown action');
  }
}