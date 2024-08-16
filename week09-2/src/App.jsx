import { useState } from 'react'
import './App.css'
import Name from './Name'

function App() {
  const data = [
    {name: "John1", surname: "Johni1",},
    {name: "John2", surname: "Johni2",},
    {name: "John3", surname: "Johni3",},
  ];
  const [stateName, setStateName ] = useState("selected name");
  const [stateSurname, setStateSurname] = useState("selected surname");
  const [choosen, setChoosen] = useState({
    name: "choosen name",
    surname: "choosen surname"
  });

  return (
    <>
      <h2>Choosen</h2>
      {choosen.name} {choosen.surname}
      <hr />
      <h2>Choosen</h2>
      {stateName} {stateSurname}
      <hr />
      {data.map((item, index) =>
        (
          <Name
            key={index}
            name={item.name}
            surname={item.surname}
            setStateName={setStateName}
            setStateSurname={setStateSurname}
            setChoosen={setChoosen}
          />
        )
      )}
    </>
  )
}

export default App
