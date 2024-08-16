import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Five from './Five'

function App() {
  const [count, setCount] = useState(0)
  //state 0 dan baslamasini useState(0) yazarak belirlemis olduk.

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          {/* setCount(count+1) olarak yazmiyoruz cunku daha uzun suren islemler gerceklestirildiginde onceki count degerinde kalmis olabilir ve count degeri guncel olmayabilir. Bu gecikmeden dolayi guncellenememe ihtimalinden dolayi onceki state degeri uzerinden yeni state degerine gecis icin callback func olarak yazmamiz gerekir. onceki deger (son state) ile isimiz var ise herzaman callback olarak yazmak gerekir. */}
          count + 1
        </button>
        <hr />
        <Five setFiveCount={setCount}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
