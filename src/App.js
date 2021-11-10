import hamburguer from '../src/assets/hamburguer.png';
import { useState } from 'react';

function App() {
  const [quantidade, setQuantidade] = useState(0);

  function adicionar() {
    setQuantidade(quantidade + 1)
  }
  function remover() {
    setQuantidade(quantidade > 0 ? quantidade - 1 : quantidade)
  }

  return (
    <div className="App">
      <div className='card'>
        <div className='hamburguer'></div>
        <h1>Hamburguer</h1>
        <p>
          Arcu, sagittis, ut lectus
          congue dapibus semper odio a, lobortis.
        </p>
        <div className='pedido'>
          <button onClick={remover}>-</button>
          <span>{quantidade}</span>
          <button onClick={adicionar}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
