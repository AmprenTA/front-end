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
import api from 'common/api/api'
export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)
  const [isAvailable, setIsAvailable] = useState<boolean>(true)
  const navigate = useNavigate()
  const move = require('../../assests/Move.png')
  const moveYellow = require('../../assests/pointer.png')
  const moveGreen = require('../../assests/MoveGreen.png')
  const Foot1 = require('../../assests/Foot1.png')
  const Foot2 = require('../../assests/Foot2.png')
  const earth = require('../../assests/earth.png')
  const wait = require('../../assests/Wait.png')
  useEffect(() => {
    let timer1 = setTimeout(() => setShowAnimation(true), 2000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  useEffect(() => {
    api
      .get(`/users/availability`)
      .then((response) => {
        setIsAvailable(response.data)
      })
      .catch((error) => {
        setIsAvailable(true)
      })
  }, [showModal])
  return (
    <LayoutContaier>
      {!isAvailable ? (
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
      ) : (
        <Modal setShowModal={setShowModal} isShowing={showModal}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                marginTop: '25px',
                marginBottom: '25px',
              }}>
              <img alt='aaa' src={wait} />
            </div>

            <div>
              <h4 className='modal-section-title'>
                Deja ai calculat amprenta ta pentru această lună. Revino luna următoare pentru un
                update.
              </h4>
              <h3 className='modal-section-subtitle '>
                Până atunci, poți să urmărești evoluția personală sau să pui în practică
                recomandările personalizate.
              </h3>
              <h4 style={{ fontSize: '20px' }} className='modal-section-title'>
                Rămâi sustenabil!
              </h4>
            </div>
          </div>
        </Modal>
      )}
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
            style={{ width: '200px', fontWeight: '500' }}
            onClick={(e) => {
              e.preventDefault()
              setShowModal(true)
            }}>
            Calculează
            <ArrowRight />
          </button>
          <p className='account'>
            Vrei să îți salvezi progresul?<span className='sign-in'> Înregistrează-te</span>
          </p>
        </div>
        <div>
          <div className='hero-first-section'>
            <div>
              {' '}
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

            <div>
              <img alt='foot' src={Foot1} />
            </div>
          </div>
          <div className='hero-first-section'>
            <div>
              <img alt='foot' src={Foot2} />
            </div>
            <div className='second-conatiner'>
              <div>
                <img alt='purple' src={moveYellow} />
              </div>
              <div
                style={{ background: '#ACD3E2', width: '438px', color: '#5B5B5B' }}
                className='square'>
                <span>Cum calculez amprenta de carbon?</span>
              </div>
            </div>
          </div>
          <div className='hero-second-section'>
            <div>
              <img alt='foot' src={earth} />
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
