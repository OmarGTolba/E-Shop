import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './Contexts/ProductsContext.jsx'
import { UserProvider } from './Contexts/UserContext.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { FavoriteProvider } from './Contexts/FavoritesContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <ProductsProvider>
<UserProvider>
<CartProvider>
<FavoriteProvider>


    <App />
</FavoriteProvider>
</CartProvider>
</UserProvider>
    </ProductsProvider>
   </BrowserRouter>
  </StrictMode>,
)
