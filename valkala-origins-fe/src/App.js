import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/js/Home'
import Signup from './components/js/Signup';
import Login from './components/js/Login';

function App() {
  return (
    <div className="App">
      <header className="top-bar">
        <div className="left-head">
          <h2><Link to="/">VALKALA ORIGINS</Link></h2>
        </div>
        <div className="right-head">
          {/* <h4>Leaderboard</h4>
          <Link to='/signup'>Sign up</Link>
          <Link to='/login'>Log in</Link> */}
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
      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
