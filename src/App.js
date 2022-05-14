import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/categoria/:categoriaId"  element={<ItemListContainer/>}/>
        <Route path="/detalles/:articuloId" element={<ItemDetailContainer/>}/>
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
