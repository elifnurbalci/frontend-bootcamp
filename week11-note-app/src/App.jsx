import AddNote from './component/AddNote'
import NoteList from './component/NoteList'
import './App.css'
import NoteProvider from './context/NoteProvider'

function App() {

  return (
    <NoteProvider>
      <div className="note">
      <h1>NotesApp</h1>
      <AddNote />
      <NoteList />
      </div>
    </NoteProvider>
  )
}

export default App
