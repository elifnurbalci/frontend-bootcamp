import { useState } from 'react';
import './App.css';
import Player from './components/player';
import Button from './components/button';

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [result, setResult] = useState('');
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');

  const rollDice = () => {
    setResult('');

    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(newDice1);
      setDice2(newDice2);

      if (newDice1 > newDice2) {
        setResult(`${player1Name} Wins!`);
      } else if (newDice1 < newDice2) {
        setResult(`${player2Name} Wins!`);
      } else {
        setResult('TRY AGAIN!');
      }
    }, 1200);
  };

  return (
    <>
      <h1>Crazy Game</h1>
      <div className="players">
        <Player name={player1Name} setName={setPlayer1Name} diceValue={dice1} />
        <Player name={player2Name} setName={setPlayer2Name} diceValue={dice2} />
      </div>
      <Button rollDice={rollDice} />
      <div className="result-area">
        <h2>{result}</h2>
      </div>
    </>
  );
}

export default App;
