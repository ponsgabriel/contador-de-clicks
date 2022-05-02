import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import FreeCodeCamp_logo from './imagenes/FreeCodeCamp_logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
      console.log('clic');
      setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('reinicio')
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
          {/* <img className='freecodecamp-logo'
          src={FreeCodeCamp_logo}
          alt='logo freecodecamp'/> */}
      </div>
      <div className='contenedor-principal'>
          <Contador numClics={numClics} />
          <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}
          />
          <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
