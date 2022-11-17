import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import './home-info-section.scss'
export const InfoSection = () => {
  const dioxide = require('../../assests/CarbonDioxide.png')
  const warming = require('../../assests/StopGlobalWarming.png')
  const carbonFootrpint = require('../../assests/CarbonFootprint.png')
  return (
    <LayoutContaier>
      <div className='info-container'>
        <div>
          <h3 className='card-header' style={{ backgroundColor: '#F78E91' }}>
            Ce este amprenta de carbon?
          </h3>
          <div className='card'>
            <div className='description'>
              <p className='first-p'>
                Amprentă de carbon, denumita si amprenta CO2, reprezintă emisiile totale de gaze cu
                efect de seră pe care o organizație, un eveniment, produs sau o persoană le produce
                într-un anumit interval de timp.
              </p>
              <div className='icon-container'>
                <img alt='dioxide' src={dioxide} />
              </div>
            </div>
            <p className='second-p'>
              Practic, aceasta este de fapt un indicator ce măsoară aceste emisii, pentru a
              identifica în ce măsură afectează mediul înconjurător. Noi îți oferim o modalitate de
              calcul și soluții.
            </p>
          </div>
        </div>
        <div>
          <h3 className='card-header' style={{ backgroundColor: '#509046' }}>
            Ce este efectul de seră?
          </h3>
          <div className='card'>
            <div className='description'>
              <p className='first-p'>
                Efectul de seră este produs de acele gaze care permit radiației solare să treacă
                prin atmosfera și să atingă Pământul dar captează o parte din radiația infraroșie
                emisă de suprafața Pământului și de straturile inferioare ale atmosferei și o
                reemite în atmosferă.
              </p>
              <div className='icon-container'>
                <img alt='warming' src={warming} />
              </div>
            </div>
            <p className='second-p'>
              Consecințele directe efectului de seră sunt schimbările fenomenelor naturale care
              afectează la rândul lor evoluția ecosistemelor.{' '}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '50px' }}>
        <h3 className='card-header' style={{ backgroundColor: '#FCD351' }}>
          Cum calculez amprenta de carbon?
        </h3>
        <div className='card' style={{ height: '200px' }}>
          <div className='description'>
            <p className='first-p'>
              Amprenta este mai mult decât un calculator inteligent cu ajutorul căruia poți să-ți
              calculezi amprenta personală de carbon, îți prezintă și evoluția real-time a amprentei
              tale, precum și statistică la nivel local, regional și național. Tot ce trebuie să
              faci este să introduci câteva date aproximative, iar noi facem restul.
            </p>
            <div className='icon-container'>
              <img alt='footprint' src={carbonFootrpint} />
            </div>
          </div>
          <button className='button-try'>
            Încearcă acum
            <ArrowRight />
          </button>
        </div>
      </div>
    </LayoutContaier>
  )
}
