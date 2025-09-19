import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'urql'
import App from './App.tsx'
import './index.css'
import { client } from './urqlClient.ts'
import { ChosenPizzaProvider } from './components/Store/chosen-pizzas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider value={client}>
      <ChosenPizzaProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChosenPizzaProvider>
    </Provider>
  </StrictMode>
)
