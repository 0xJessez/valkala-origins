import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/js/Home'
import Leaderboard from './components/js/Leaderboard';
import Signup from './components/js/Signup';
import Login from './components/js/Login';
import Town from './components/js/Town';
import Summoning from './components/js/Summoning';
import Barracks from './components/js/Barracks';
import Dungeons from './components/js/Dungeons';
import Blacksmith from './components/js/Blacksmith';

export default function App() {
  // State for sessions
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null)

  // State to check if Orc has been summoned
  const [orcSummoned, setOrcSummoned] = useState(null)

  const checkUser = () => {
    console.log('test')
    fetch('/api/sessions')
      .then(res => res.json())
      .then(user => {
        if (user) {
          setLoggedInUserName(user.username)
          setLoggedInUserId(user.id)
        }
      })
  }

  const checkOrcExists = () => {
    console.log('orc?')
    fetch('/api/orcs/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loggedInUserId })
    })
      .then(res => res.json())
      .then(orc => {
        if (orc) {
          setOrcSummoned(orc)
        }
      })
  }

  useEffect(checkUser, []);
  useEffect(checkOrcExists, [loggedInUserId]);

  // const signOut = () => {
  //   fetch('/api/sessions', {
  //     method: 'DELETE'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setLoggedInUserId(res)
  //       setLoggedInUserName(res)
  //     })
  // }

  return (
    <div className="App">
      <header className="top-bar">
        <div className="left-head">
          <h2><Link to="/">VALKALA ORIGINS</Link></h2>
        </div>
        <div className="right-head">
          <nav>
            <ul>
              {/* add conditional log out button */}
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">Log in</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home loggedInUserName={loggedInUserName} />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={
          <Login
            setLoggedInUserName={setLoggedInUserName}
            loggedInUserId={loggedInUserId}
            setLoggedInUserId={setLoggedInUserId}
          />}
        />

        {/* To be cleaned up using nesting */}
        <Route path='/town' element=
          {<Town
            orcSummoned={orcSummoned}
          />}
        />
        <Route path='/town/summoning' element={
          <Summoning
            loggedInUserId={loggedInUserId}
            orcSummoned={orcSummoned}
            setOrcSummoned={setOrcSummoned}
          />}
        />
        <Route path='/town/barracks' element=
          {<Barracks
            loggedInUserId={loggedInUserId}
            orcSummoned={orcSummoned}
            setOrcSummoned={setOrcSummoned}
          />}
        />
        <Route path='/town/dungeons' element={<Dungeons />} />
        <Route path='/town/blacksmith' element={<Blacksmith />} />
      </Routes>
    </div>
  );
}
