import { Link } from 'react-router-dom'
import '../css/Town.scss'
import energy from '../images/energy.svg'

export default function Town() {

  return (
    <div className="Town">
      <div className="town-area">
        <div className="energy-gauge">
          <img src={energy} alt="" />
          <div className="energy-num">100</div>
        </div>
        <Link to='/town/barracks' className="hotspot" id='barracks'>
          <span className="location-text">BARRACKS</span>
          <span className="location-soon">(UNDER CONSTRUCTION)</span>
        </Link>
        <Link to='/town/summoning' className="hotspot" id='summoning-ground'>
          <span className="location-text">SUMMONING GROUND</span>
        </Link>
        <Link to='/town/dungeons' className="hotspot" id='dungeons'>
          <span className="location-text">DUNGEONS</span>
          <span className="location-soon">(UNDER CONSTRUCTION)</span>
        </Link>
        <Link to='/town/blacksmith' className="hotspot" id='blacksmith'>
          <span className="location-text">BLACKSMITH</span>
          <span className="location-soon">(UNDER CONSTRUCTION)</span>
        </Link>
      </div>
    </div>
  )
}