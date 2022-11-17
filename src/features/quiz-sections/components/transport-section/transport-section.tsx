import { Step, Stepper } from 'react-form-stepper'
import { ModalSection } from '../modal-section.tsx/modal-section'
import styles from './transport-section.module.scss'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { useState } from 'react'
import { TransportQuestions } from '../transport-questions/transport-questions-car'
import { Button } from 'primereact/button'
import { Back } from 'common/assets/icons/ArrowLeft'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
export const TransportSection = () => {
  const [showQuiz, setShowQuiz] = useState(false)
  const navigate = useNavigate()
  const car = require('../../assets/Car.png')
  return (
    <ModalSection>
      <div className={styles.transportSection_ModalBody}>
        <div className={styles.transportSection_BackButtonContainer}>
          <Button
            icon={<Back />}
            className={styles.transportSection_BackButton}
            onClick={() => {
              navigate(PAGES_PATHS.HOME)
            }}>
            Back
          </Button>
        </div>

        {showQuiz ? (
          <>
            <TransportQuestions />
          </>
        ) : (
          <>
            <Stepper
              className={styles.transportSection_Stepper}
              connectorStyleConfig={{ activeColor: '#509046', size: '1px' }}
              styleConfig={{
                completedBgColor: '#509046',
                completedTextColor: '#509046',
                activeBgColor: '#FCD351',
                activeTextColor: '#FCD351',
                inactiveTextColor: '#e0e0e0',
              }}
              activeStep={1}>
              <Step label='Calatorii' />
              <Step label='Gospodarie' />
              <Step label='Alimentatie' />
            </Stepper>
            <div className=''>
              <div className={styles.transportSection_Image}>
                <img alt='car' src={car} />
              </div>
              <span className={styles.transportSection_Info}>
                Prima secțiune este legată de călătorii. Te rugăm să fii cât mai exact posibil în
                oferirea informațiilor.
              </span>
              <div>
                <button
                  className='button-try'
                  style={{ width: '200px', marginTop: '32px' }}
                  onClick={() => setShowQuiz(true)}>
                  Bine
                  <ArrowRight />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </ModalSection>
  )
}
