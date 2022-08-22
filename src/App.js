// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//    <h1>La Pelu</h1>
//   );
// }

// export default App;

import NavBar from './components/NavBar.js';
import Curso from './components/Curso';
import './style/css/style.css';

const App = () => {
  return(
    <>
    <div className='app'>
    <NavBar />
      <h1>La Pelu</h1>
      <hr/>
      {/* esto es un comentario */}
      <Curso curso="ReactJs" profesor="Leo Messi" duracion="7" precio="500"/>
      <Curso curso="JavaScript" profesor="Carlos Glarde" duracion="7" precio="100"/>
    </div>
    </>
  );
}


export default App;