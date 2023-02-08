import '../css/Town.scss'

export default function Summoning() {
  // State to check if character


  const summonOptions = [
    {
      mainhand: 'stone dagger',
      offhand: 'strong staff',
      helm: 'steel helmet',
      mainhandTier: 0,
      offhandTier: 1,
      helmTier: 2,
    },
    {
      mainhand: 'iron sword',
      offhand: 'rusty dagger',
      helm: 'wood headress',
      mainhandTier: 2,
      offhandTier: 1,
      helmTier: 1,
    },
    {
      mainhand: 'strong hammer',
      offhand: 'steel dagger',
      helm: 'wooden helm',
      mainhandTier: 1,
      offhandTier: 2,
      helmTier: 0,
    }
  ]

  const checkCharExists = () => {

  }

  return (
    <div className="Summoning">
      <div className="summoning-area">
        <div className="summon-heading"><h3>SUMMON A CHAMPION</h3></div>
        <div className="scroll-container">
          {summonOptions.map((option, index) =>
            <div className="scroll" key={index}>
              <p>{option.mainhand + " + " + option.mainhandTier}</p>
              <p>{option.offhand + " + " + option.offhandTier}</p>
              <p>{option.helm + " + " + option.helmTier}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}