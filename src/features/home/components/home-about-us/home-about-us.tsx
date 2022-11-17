import { LayoutContaier } from 'layout/layout-container/layout-container'
import './home-about-us.scss'
export const AboutUs = () => {
  const Nadejda = require('../../assests/Nadejda.png')
  const Petru = require('../../assests/Petru.png')
  const Sergiu = require('../../assests/Sergiu.png')
  const Anastasia = require('../../assests/Anastasia.jpg')
  const Nelu = require('../../assests/Nelu.png')
  const Steps = require('../../assests/Steps.png')
  return (
    <LayoutContaier>
      <div className='about-us'>
        <div>
          <div className='first-union'>
            <div className='image-wrapper'>
              <img alt='Petru' src={Petru} />
            </div>
            <div className='image-wrapper Sergiu'>
              <img alt='Sergiu' src={Sergiu} />
            </div>
          </div>
          <div className='first-union second'>
            <div className='image-wrapper Nadejda'>
              <img alt='Nadejda' src={Nadejda} />
            </div>
            <div className='image-wrapper Anastasia'>
              <img alt='Nadejda' src={Anastasia} />
            </div>
          </div>
          <div className='first-union third'>
            <div className='image-wrapper Nadejda'>
              <img alt='Nadejda' src={Nelu} />
            </div>
          </div>
        </div>
        <div>
          <h3 className='header'>Despre noi</h3>
          <p className='paragraph'>
            Prin amprentă de carbon se înțelege totalitatea emisiilor de gaze cu efect de seră care
            sunt eliberate în atmosferă. Cu alte cuvinte, amprenta de carbon, cunoscută și sub
            numele de amprenta de CO2, reprezintă impactul pe care îl are un individ sau o companie
            asupra mediului.
          </p>
          <p className='paragraph'>
            În ceea ce priveşte reducerea amprentei de carbon, un prim pas util este acela de a
            măsura emisiile totale de gaze cu efect de seră ale companiei şi de a determina de unde
            provin emisiile de CO2. Un auditor autorizat independent poate efectua un audit
            energetic
          </p>
          <div className='steps-wrapper'>
            <div className='steps-image'>
              <img src={Steps} alt='steps' />
            </div>
            <div className='steps'>
              <div className='first'>Creăm site-ul web și îl facem public </div>
              <div className='second'>Colectăm datele și le separăm pe nivele</div>
              <div className='third'>Mergem la instituțiile responsabile</div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
