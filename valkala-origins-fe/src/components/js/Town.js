import '../css/Town.scss'

export default function Town() {

  return (
    <div className="Town">
      <div className="town-area">
        <a href="#" className="hotspot" id='barracks'>
          <span className="location-text">BARRACKS</span>
        </a>
        <a href="#" className="hotspot">
          <span className="location-text">SUMMONING GROUND</span>
        </a>
        <a href="#" className="hotspot">
          <span className="location-text">DUNGEONS</span>
        </a>
        <a href="#" className="hotspot">
          <span className="location-text">BLACKSMITH</span>
        </a>
      </div>
    </div>
  )
}