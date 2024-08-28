import { useState } from 'react'
import './App.css'

import Intro from './components/Intro/Intro.jsx'
import Questions from './components/Questions/Questions.jsx'
import Result from './components/Result/Result.jsx'

function App() {
  const [isActive, setIsActive] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [detailedResult, setDetailedResult] = useState([]);

  return (
    <>
      <div className="App">
        {isActive && !isCompleted && <Intro setIsActive={setIsActive} />}
        {!isActive && !isCompleted && (
          <Questions
            setIsCompleted={setIsCompleted}
            setIsActive={setIsActive}
            setScore={setScore}
            setWrong={setWrong}
            setDetailedResult={setDetailedResult}
          />
        )}
        {isCompleted && (
          <Result
            score={score}
            wrong={wrong}
            detailedResult={detailedResult}
          />
        )}
      </div>
    </>
  );
}

export default App;
