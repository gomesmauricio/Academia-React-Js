import { useState } from 'react';
import './App.css';
import ComponenteFilho from './componentes/ComponenteFilho';
function App() {
  const [estadoPai, setEstadoPai] = useState('não clicou')
  const [estadoFilho, setEstadoFilho] = useState('não clicou')
  
  const handleClick = () => {
    setEstadoFilho('clicou')
  }
  
  return (
    <div className="componente-pai">
      <h1>botão localizado no componente filho {estadoPai}</h1>
      <button onClick={handleClick}>Clique aqui para alterar o componente pai</button>

      <ComponenteFilho 
        setEstadoPai={setEstadoPai}
        estadoFilho={estadoFilho}
      />
    </div>
  );
}

export default App;
