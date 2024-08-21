import Dice from './dice';

function Player({ name, setName, diceValue }) {
  return (
    <div className="player">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="player-name-input"
      />
      <Dice value={diceValue} />
    </div>
  );
}

export default Player;
