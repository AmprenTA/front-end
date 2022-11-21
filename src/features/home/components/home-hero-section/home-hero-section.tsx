import { Logo } from 'common/assets/icons/Logo'
import { Modal } from 'common/components/Modal/Modal'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'

import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home-hero-section.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const navigate = useNavigate()
  const move = require('../../assests/Move.png')
  const moveYellow = require('../../assests/pointer.png')
  const moveGreen = require('../../assests/MoveGreen.png')
  useEffect(() => {
    let timer1 = setTimeout(() => setShowAnimation(true), 2000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

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

      <div className='hero-section' data-aos='fade-up' data-aos-anchor-placement='top-center'>
        <div>
          <Logo />
          <p className='description'>
            Acesta este un calculator bazat pe Machine Learning, capabil să-ți calculeze amprenta de
            carbon și să-ți ofere recomandări personalizate.
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
        <div>
          <div>
            <div>
              <img alt='purple' src={move} />
            </div>
            {!showAnimation ? (
              <>
                {' '}
                <div style={{ background: '#FF6064' }} className='square-dots'>
                  <div className={'loader'}>
                    <span className={'loaderDot'}></span>
                    <span className={'loaderDot'}></span>
                    <span className={'loaderDot'}></span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {' '}
                <div style={{ background: '#FF6064' }} className='square-animated'>
                  <div className={'loader'}>
                    <span className='title-square'>Ce este carbon footprint?</span>
                  </div>{' '}
                </div>
              </>
            )}
          </div>

          <div className='second-conatiner'>
            <div>
              <img alt='purple' src={moveYellow} />
            </div>
            <div
              style={{ background: '#FCD351', width: '438px', color: '#5B5B5B' }}
              className='square'>
              <span>Cum calculez amprenta de carbon?</span>
            </div>
          </div>
          <div>
            <div>
              <img alt='purple' src={moveGreen} />
            </div>
            <div
              style={{ background: '#509046', width: '300px', color: '#FFFEF7' }}
              className='square'>
              <span>Efectul de seră, ce este?</span>
            </div>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
