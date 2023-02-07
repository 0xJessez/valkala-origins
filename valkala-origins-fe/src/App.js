import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/js/Home'
import Signup from './components/js/Signup';
import Login from './components/js/Login';
import Town from './components/js/Town';

function App() {
  // State for sessions
  const [nameloggedInUserName, setLoggedInUserName] = useState(null);

  const checkUser = () => {
    fetch('/api/sessions')
      .then(res => res.json())
      .then(userName => {
        if (userName) {
          setLoggedInUserName(userName)
        }
      })
  }

  useEffect(() => checkUser())

  return (
    <div className="App">
      <header className="top-bar">
        <div className="left-head">
          <h2><Link to="/">VALKALA ORIGINS</Link></h2>
        </div>
        <div className="right-head">
          <nav>
            <ul>
              <li>Leaderboard</li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">Log in</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/town' element={<Town />} />
      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
