import './result.css';

function Result({ score, wrong, detailedResult }) {
  const empty = 10 - score - wrong;

  return (
    <div>
      <h1>Result</h1>
      <p>Correct: {score}</p>
      <p>Wrong: {wrong}</p>
      <p>Empty: {empty}</p>
      <h2>Report</h2>
      
      <ul>
        {detailedResult.map((item) => (
          <div className='options' key={item.id}>
            <li>
              <div>Question {item.id}:</div>
              <div>Your Answer: {item.userAnswer !== "Empty" ? item.userAnswer : "Empty"}</div> {/* Cevap boşsa "Empty" göster */}
              <div>Correct Answer: {item.correctAnswer}</div>
              <div>Result: {item.result}</div>
              <br />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Result;
