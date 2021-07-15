import { useState } from 'react';
import './App.css';
function App() {
  //let count = 1;
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    //count += 1
    setCount(pState => pState + 1)
  }
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}
export default App;