import './result.css'

function Result({score, wrong}) {
  const empty = 10-score-wrong;
  return (
    <div>
      <p>Correct: {score}</p>
      <p>Wrong: {wrong}</p>
      <p>Empty: {empty} </p>
    </div>
  )
}
export default Result