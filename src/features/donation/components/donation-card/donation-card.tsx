import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import style from './donation-card.module.scss'
export const DonationCard = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const greenPace = require('../../assets/greenpace.png')
  const asap = require('../../assets/asap.png')
  const actForTomorrow = require('../../assets/actForTomorrow.png')
  const greenTury = require('../../assets/GreenTury.png')
  const yes = require('../../assets/Yes.png')

  const cards = [
    {
      title: 'Rămâi calm în trafic',
      link: 'https://www.greenpeace.org/romania/',
      img: greenPace,
      content:
        'Greenpeace este o organizaţie independentă, care acţionează pentru a schimba atitudini şi, pentru a proteja şi conserva mediul înconjurător.',
    },
    {
      title: 'ASAP România',
      link: 'https://asap-romania.ro/',
      img: asap,
      content:
        'Implementază un program de colectare selectivă a deșeurilor în toate unitățile de învățământ din România.',
    },
    {
      title: 'Act for tomorrow',
      link: 'https://actfortomorrow.ro/',
      img: actForTomorrow,
      content:
        'Rolul organizației noastre este acela de a promova o cultură a responsabilității civice și sociale în rândul cetățenilor.',
    },
    {
      title: '21st Greentury',
      link: '',
      img: greenTury,
      content:
        'Lucrăm pentru un viitor unde natura și oamenii coexistă într-o mai mare armonie, mai sustenabil și unde toată lumea poate fi un agent al schimbării.',
    },
    {
      title: 'YES ONG',
      img: yes,
      content:
        'YES este un ONG prietenos și deschis la inovație având misiunea principală de a promova un stil de viață eco-sustenabil.',
    },
  ]
  return (
    <LayoutContaier>
      <div className={style.donationCard} data-aos='fade-right'>
        <h1 style={{ color: '#222122', fontWeight: '500' }}>Donații</h1>
        <div className={style.donationCard_Article}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
            urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
            Aliquam in elementum tellus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
            urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
            Aliquam in elementum tellus.
          </p>
        </div>
        <div className={style.donationCard_Container}>
          {cards.map((item, index) => {
            return (
              <div key={index} className={style.donationCard_Card}>
                <div className={style.donationCard_Image}>
                  <img alt='food' src={item.img} />
                </div>
                <h3 className={style.donationCard_Title}>{item.title}</h3>
                <p className={style.donationCard_Paragraph}>{item.content}</p>
                <div style={{ width: '100%', display: 'flex' }}>
                  <button
                    style={{ width: '100%' }}
                    className='button-try'
                    onClick={(e) => {
                      window.location.href = item.link!
                    }}>
                    Donează
                    <ArrowRight />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </LayoutContaier>
  )
}
