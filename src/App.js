import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import  CartProvider  from "./context/CartContext";
import Cart from "./componentes/Cart";

function App() {
  return (
    <div className="app-body">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:categoriaId"  element={<ItemListContainer/>}/>
            <Route path="/detalles/:articuloId" element={<ItemDetailContainer/>}/>
            <Route path="/listadoItems" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
