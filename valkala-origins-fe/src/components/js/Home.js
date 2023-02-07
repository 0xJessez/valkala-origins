import { Link } from 'react-router-dom'
import '../css/Home.scss'

export default function Home() {

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
          <Link to="/town">PLAY NOW</Link>
        </div>
      </main>
    </div>
  )
}