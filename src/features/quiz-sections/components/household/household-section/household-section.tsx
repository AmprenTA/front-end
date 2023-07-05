import { Step, Stepper } from 'react-form-stepper'
import { ModalSection } from '../../modal-section.tsx/modal-section'
import styles from '../../transport/transport-section/transport-section.module.scss'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { useState } from 'react'
import { HouseholdQuestions } from '../household-question/household-question'
import { Button } from 'common/components/Button/Button'
import { Back } from 'common/assets/icons/ArrowLeft'
import { useNavigate } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { useParams } from 'react-router-dom'

export const HouseHoldSection = () => {
  const { id } = useParams()
  const [showQuiz, setShowQuiz] = useState(false)
  const navigate = useNavigate()
  const car = require('../../../assets/Energy.png')
  return (
    <ModalSection>
      <div className={styles.transportSection_ModalBody}>
        <div className={styles.transportSection_BackButtonContainer}>
          <Button
            icon={<Back />}
            className={styles.transportSection_BackButton}
            onClick={() => {
              navigate(PAGES_PATHS.TRANSPORT_SECTION)
            }}>
            Back
          </Button>
        </div>
        {showQuiz ? (
          <>
            <HouseholdQuestions foodPrintId={id} />
          </>
        ) : (
          <>
            <Stepper
              className={styles.transportSection_Stepper}
              // connectorStyleConfig={{ activeColor: '#509046', size: '1px' }}
              // styleConfig={{
              //   completedBgColor: '#509046',
              //   completedTextColor: '#509046',
              //   activeBgColor: '#FCD351',
              //   activeTextColor: '#FCD351',
              //   inactiveTextColor: '#e0e0e0',
              // }}
              activeStep={2}>
              <Step label='Calatorii' />
              <Step label='Gospodarie' />
              <Step label='Alimentatie' />
            </Stepper>
            <div className=''>
              <div className={styles.transportSection_Image}>
                <img alt='car' src={car} />
              </div>
              <span className={styles.transportSection_Info}>
                Felicitări, ai terminat secțiunea de călătorii. Acum urmează secțiunea de
                gospodărie.
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
