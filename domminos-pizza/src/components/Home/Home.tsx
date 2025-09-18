import type { Pizza } from "@/gql/graphql";
import { PizzaList } from "../PizzaList/PizzaList"

type HomeProps = {
  chosenPizzas: Pizza[];
  setChosenPizzas: (pizzas: Pizza[]) => void;
}

export const Home = ({ chosenPizzas, setChosenPizzas }: HomeProps) => {
  return (
    <div>
      <PizzaList chosenPizzas={chosenPizzas} setChosenPizzas={setChosenPizzas} />
    </div>
  )
}