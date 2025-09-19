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
export type ChosenPizzasDispatchAction =
  | { type: 'add'; pizza: Pizza }
  | { type: 'clear' };
export function chosenPizzasReducer(
  pizzas: Pizza[],
  action: ChosenPizzasDispatchAction,
) {

  // TODO
}