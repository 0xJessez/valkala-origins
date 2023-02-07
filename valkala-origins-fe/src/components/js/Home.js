import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import '../css/Home.scss'

function Home() {

  return (
    <div className="Home">
      <main className="landing">
        <div className="emblem">
          TBC
        </div>
        <div className="main-heading">
          <h1>VALKALA ORIGINS</h1>
        </div>
        <div className="play">
          <a href="">PLAY NOW</a>
        </div>
      </main>
    </div>
  )
}

export default Home