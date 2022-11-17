import { Logo } from 'common/assets/icons/Logo'
import { Modal } from 'common/components/Modal/Modal'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'

import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home-hero-section.scss'
export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  return (
    <LayoutContaier>
      {showModal ? (
        <Modal setShowModal={setShowModal} isShowing={showModal}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <h4 className='modal-section'>Ești gata să-ți calculezi amprenta de carbon?</h4>
            </div>
            <div>
              <button
                className='button-try'
                onClick={(e) => {
                  e.preventDefault()
                  setShowModal(false)
                  navigate(PAGES_PATHS.TRANSPORT_SECTION)
                }}>
                Vreau să incep
                <ArrowRight />
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      <div className='hero-section'>
        <div>
          <Logo />
          <p className='description'>
            Știm că ai multe întrebări, de asta am creat un calculator bazat pe Machine
            Learning,accesibil și ușor de folosit.
          </p>
          <p className='details'>
            Calculează-ți amprenta de carbon și <span>acționează</span> imediat
          </p>
          <button
            className='button-try'
            onClick={(e) => {
              e.preventDefault()
              setShowModal(true)
            }}>
            Înregistrează-te
            <ArrowRight />
          </button>
          <p className='account'>
            Nu vrei să ai un cont?<span className='sign-in'> Continuă neînregistrat</span>
          </p>
        </div>
        <div></div>
      </div>
    </LayoutContaier>
  )
}
