import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import axios from 'axios'; 

function App() {
  const [input, setInput] = useState('');
  const [cryptoInfo, setCryptoInfo] = useState(null);

  async function handleSearch() {
    if (input === '') {
      alert('Digite o nome da criptomoeda');
      return;
    }

    try {
      const response = await axios.get('https://data.binance.com/api/v3/ticker/24hr');
      
      const foundCrypto = response.data.find((crypto) => crypto.symbol === input.toUpperCase());

      if (foundCrypto) {
        setCryptoInfo(foundCrypto);
      } else {
        alert('Criptomoeda não encontrada');
      }
    } catch (error) {
      console.error('Erro ao buscar a criptomoeda:', error);
      alert('Erro ao buscar a criptomoeda');
    }
  }

  return (
    <div className="container">
      <h1 className="title">BUSCAR CRIPTOMOEDAS</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite o nome da criptomoeda..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {cryptoInfo && (
        <main className="main">
          <h2>{cryptoInfo.symbol}</h2>
          <span>Nome da Criptomoeda: {cryptoInfo.symbol}</span>
          <span>Preço de Abertura: {cryptoInfo.openPrice}</span>
          <span>Preço Atual: {cryptoInfo.lastPrice}</span>
         
        </main>
      )}
    </div>
  );
}

export default App;
