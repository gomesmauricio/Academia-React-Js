import './App.css';
import ComponenteFilho from './componentes/ComponenteFilho';
import { useToggle } from './contexts/ToggleProvider';

function App() {
  const { estadoPai, handleClickEstadoPai} = useToggle()
  return (
    <div>
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai}>Clique aqui</button>
        {estadoPai&&<p>Aberto</p>} 
        <ComponenteFilho />
      </div>
    </div>
  );
} 

export default App;
