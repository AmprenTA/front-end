import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './user-recomandation.module.scss'
export const UserRecomandation = () => {
  const food = require('../assets/FoodScarcity.png')
  const water = require('../assets/WaterEfficiency.png')
  const energy = require('../assets/UsePublicTransportation.png')
  return (
    <LayoutContaier>
      <div>
        <h1 style={{ fontWeight: '500', color: '#222122' }}>Recomandări pentru tine</h1>
        <div className={style.recomandationCard_Container}>
          {''}
          <div className={style.recomandationCard_Card}>
            <div className={style.recomandationCard_Image}>
              <img alt='food' src={food} />
            </div>
            <h4 className={style.recomandationCard_Title}>Alege organic și local</h4>
            <p className={style.recomandationCard_Paragraph}>
              În transportul alimentelor la o distanță mare, cu vaporul, avionul sau mașina, se
              folosesc combustibili fosili pentru energie și pentru răcire.
            </p>
          </div>
          {''}
          <div className={style.recomandationCard_Card}>
            <div className={style.recomandationCard_Image}>
              <img alt='water' src={water} />
            </div>
            <h4 className={style.recomandationCard_Title}>Oprește electricitatea</h4>
            <p className={style.recomandationCard_Paragraph}>
              Atunci când nu ești acasă, oprește luminile și scoate electrocasnicele din alimentare
              dacă nu necesită energie contină (ex. fierbătorul)
            </p>
          </div>
          {''}
          <div className={style.recomandationCard_Card}>
            <div className={style.recomandationCard_Image}>
              <img alt='energy' src={energy} />
            </div>
            <h4 className={style.recomandationCard_Title}>Rămâi calm în trafic</h4>
            <p className={style.recomandationCard_Paragraph}>
              Studiile arată că condusul agresiv consumă mai mult combustibil decât codusul calm, de
              aceea evită opririle bruște și accelerările continue.
            </p>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
