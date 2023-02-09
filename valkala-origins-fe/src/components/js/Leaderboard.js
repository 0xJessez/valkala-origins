import '../css/Town.scss'
import { Link } from 'react-router-dom'

export default function Leaderboard() {
  return (
    <div className="Leaderboard">
      <div className="under-construction-container">
        <div className="under-construction"><h2>UNDER CONSTRUCTION COME BACK LATER</h2></div>
      </div>

      <div className="town-return">
        <Link to='/town'>return to town</Link>
      </div>
    </div>
  )
}