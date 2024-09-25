import './App.css';
import BodyArea from './pages/BodyArea';
import NavBar from './pages/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <br />
      <div className='body'>
        <BodyArea />
      </div>
    </Router>
  );
}

export default App;
