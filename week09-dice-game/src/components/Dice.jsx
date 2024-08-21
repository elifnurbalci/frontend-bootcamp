function Dice({ value }) {
    return (
      <div className="dice-area">
        <img src={`./images/dice${value}.png`} alt={value} />
      </div>
    );
  }
  
  export default Dice;
  