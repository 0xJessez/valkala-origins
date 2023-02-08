import { Link } from 'react-router-dom'
import '../css/Town.scss'

export default function Town() {

  return (
    <div className="Town">
      <div className="town-area">
        <a href="#" className="hotspot" id='barracks'>
          <span className="location-text">BARRACKS</span>
        </a>
        <a href="#" className="hotspot" id='summoning-ground'>
          <span className="location-text"><Link to='/town/summoning'>SUMMONING GROUND</Link></span>
        </a>
        <a href="#" className="hotspot" id='dungeons'>
          <span className="location-text">DUNGEONS</span>
        </a>
        <a href="#" className="hotspot" id='blacksmith'>
          <span className="location-text">BLACKSMITH</span>
        </a>
      </div>
    </div>
  )
}