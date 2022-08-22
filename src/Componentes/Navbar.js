import image from "../img/logo192.png";
import '../style/css/style.css';
import ItemListContainer from './ItemListContainer';

function NavBar() {
  return (
    <div className="NavBar">
      <header>
        
        <nav className="navbar" id="app">
          <img src={image} className="logo" alt="logo"/>
          <a href="#app">Inicio</a>
          <a href="#app">About</a>
          <a href="#app">Productos</a>
          <a href="#app">Contacto</a>
          <ItemListContainer />
        </nav>

      </header>
    </div>
  );
}

export default NavBar;
