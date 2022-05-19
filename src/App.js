import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import  CartProvider  from "./context/CartContext";

function App() {
  return (
    <div className="app-body">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/categoria/:categoriaId"  element={<ItemListContainer/>}/>
            <Route path="/detalles/:articuloId" element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
