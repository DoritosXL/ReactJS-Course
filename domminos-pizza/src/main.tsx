import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Provider } from 'urql'
import App from './App.tsx'
import './index.css'
import { client } from './urqlClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
