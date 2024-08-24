import { useState } from 'react'
import './App.css'

import Intro from './components/Intro/Intro.jsx'
import Questions from './components/Questions/Questions.jsx'

function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <h1>Quiz App</h1>
        <div className="App">
          {isActive ? <Intro setIsActive={setIsActive}/> : <Questions />}
        </div>
    </>
  )
}

export default App