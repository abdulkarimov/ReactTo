import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import Home from './routes/Home'
import Products from './routes/Products'
import Product from './routes/Product'
import { Provider, Client, defaultExchanges } from 'urql'

const client = new Client({
  url: 'http://38.242.229.113:8055/graphql',
  exchanges: defaultExchanges
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider value={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
