import { useState } from 'react'
import './App.css'

import Intro from './components/Intro/Intro.jsx'
import Questions from './components/Questions/Questions.jsx'
import Result from './components/Result/Result.jsx'

function App() {
  const [isActive, setIsActive] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <h1>Quiz App</h1>
        <div className="App">
          {isActive ? <Intro setIsActive={setIsActive}/> : <Questions setIsCompleted={setIsCompleted} />}
          {isCompleted && <Result />}
        </div>
    </>
  )
}

export default App