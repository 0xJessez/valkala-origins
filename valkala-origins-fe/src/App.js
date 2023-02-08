import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/js/Home'
import Signup from './components/js/Signup';
import Login from './components/js/Login';
import Town from './components/js/Town';

export default function App() {
  // State for sessions
  const [loggedInUserName, setLoggedInUserName] = useState(null);

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
        <Route path='/' element={<Home loggedInUserName={loggedInUserName} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={
          <Login
            loggedInUserName={loggedInUserName}
            setLoggedInUserName={setLoggedInUserName}
          />}
        />
        <Route path='/town' element={<Town />} />
      </Routes>
    </div>
  );
}
