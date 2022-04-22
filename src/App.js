import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import carrito from './carrito.png'

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <img src={carrito} className="App-logo" alt="logo" />
      <NavBar item1 ='Pantalon' item2='Remera' item3='Campera'></NavBar>
      <ItemListContainer></ItemListContainer>
    </>

  );
}

export default App;
