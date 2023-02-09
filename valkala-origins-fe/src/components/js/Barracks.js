import '../css/Town.scss'
import { Link } from 'react-router-dom'
import { orcImages } from '../../orcImages'
import energy from '../images/energy.svg'

export default function Barracks({ loggedInUserId, orcSummoned, setOrcSummoned }) {
  const restoreEnergy = () => {
    const energy = 100
    fetch('/api/orcs/energy', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ energy, loggedInUserId })
    })

    // Fix this
  }

  return (
    <div className="Barracks">
      <div className="barracks-heading">AN ORC'S HUMBLE ABODE</div>
      <div className="orc-container">
        <div className="orc-details">
          <img src={orcImages[orcSummoned.orc]} alt="" />
          <p>{orcSummoned.mainhand + " + " + orcSummoned.mainhand_tier}</p>
          <p>{orcSummoned.offhand + " + " + orcSummoned.offhand_tier}</p>
          <p>{orcSummoned.helm + " + " + orcSummoned.helm_tier}</p>
        </div>
        <div className="stats-inventory">
          <h4>Orc stats</h4>
          <p>Level: {orcSummoned.level}</p>
          <p>Exp: {orcSummoned.exp}/100</p>
          <div className="inventory">
            <h4>Inventory</h4>
            <p>Under construction</p>
          </div>
        </div>
        <div className="energy-container">
          <h4>Restore energy</h4>
          <img src={energy} alt="" />
          <p>Current energy: {orcSummoned.energy}/100</p>
          <button onClick={restoreEnergy}>CHUG A POTION</button>
        </div>
      </div>
      <div className="town-return">
        <Link to='/town'>return to town</Link>
      </div>
    </div>
  )
}