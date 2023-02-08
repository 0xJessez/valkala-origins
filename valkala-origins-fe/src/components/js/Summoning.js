import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { orcImages } from '../../orcImages'
import { summonOptions } from '../../orcOptions'
import '../css/Town.scss'

export default function Summoning({ loggedInUserName }) {
  // State to check if character
  const [orcSummoned, setOrcSummoned] = useState(false)

  // State to store orc to summon
  const [orcToSummon, setOrcToSummon] = useState(null)

  const createOrc = () => {
    if (orcToSummon !== null) {
      fetch('/api/orcs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orcToSummon })
      })
    }
  }

  useEffect(createOrc, [orcToSummon])

  useEffect(() => {
    const checkOrcExists = () => {
      // console.log('test')

      fetch('/api/orcs/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loggedInUserName })
      })
        .then(res => res.json())
        .then(res => {
          if (res) {
            setOrcSummoned(true)
          }
        })
    };
    checkOrcExists();
  }, []);

  const selectOrc = option => {
    setOrcToSummon(option)
  }

  return (
    <div className="Summoning">
      <div className="summoning-area">
        <div className="summon-heading">SUMMON AN ORC CHAMPION</div>
        <div className="message">
          {/* {orcSummoned && <div>Orc already summoned, return to town</div>} */}
        </div>
        <div className="scroll-container">
          {summonOptions.map((option, index) =>
            <div className="scroll" key={index} onClick={() => selectOrc(option)}>
              <p>{option.mainhand + " + " + option.mainhandTier}</p>
              <p>{option.offhand + " + " + option.offhandTier}</p>
              <p>{option.helm + " + " + option.helmTier}</p>
              <img src={orcImages[option.orc]} alt="" />
            </div>
          )}
        </div>
        <div className="town-return">
          <Link to='/town'>return to town</Link>
        </div>
      </div>
    </div>
  )
}