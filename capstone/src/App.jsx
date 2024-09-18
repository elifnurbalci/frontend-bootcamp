
import './App.css'
import Author from './pages/Author'
import Book from './pages/Book'
import Borrowing from './pages/Borrowing'
import Category from './pages/Category'
import Publisher from './pages/Publisher'
import Welcome from './pages/Welcome'

function App() {

  return (
    <>
      <Welcome />
      <Publisher />
      <Category />
      <Borrowing />
      <Book />
      <Author />
    </>
  )
}

export default App
