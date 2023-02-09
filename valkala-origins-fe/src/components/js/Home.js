import { Link } from 'react-router-dom'

import '../css/Home.scss'

export default function Home({ loggedInUserName }) {
  return (
    <div className="Home">
      <main className="landing">
        <div className="main-heading">
          <h1>VALKALA ORIGINS</h1>
        </div>
        <div className="play">
          {loggedInUserName && <Link to="/town">PLAY NOW</Link>}
          {!loggedInUserName && <Link to="/login">LOG IN TO PLAY</Link>}
        </div>
      </main>
    </div>
  )
}