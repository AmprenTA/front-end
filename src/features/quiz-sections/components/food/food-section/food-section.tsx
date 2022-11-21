import { Step, Stepper } from 'react-form-stepper'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { UpArrow } from 'features/quiz/assets/icons/UpArrow'
import { ModalSection } from '../../modal-section.tsx/modal-section'
import { Button } from 'primereact/button'
import styles from '../../transport-section/transport-section.module.scss'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { useState } from 'react'
import { FoodQuestions } from '../food-questions/food-questions'
import { useParams } from 'react-router-dom'

export const FoodSection = () => {
  const { id } = useParams()
  const [showQuiz, setShowQuiz] = useState(false)
  const car = require('../../../assets/Food.png')
  return (
    <ModalSection>
      <div className={styles.transportSection_ModalBody}>
        {showQuiz ? (
          <>
            <FoodQuestions footPrintId={id!} />
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
              activeStep={3}>
              <Step label='Calatorii' />
              <Step label='Gospodarie' />
              <Step label='Alimentatie' />
            </Stepper>
            <div className=''>
              <div className={styles.transportSection_Image}>
                <img alt='car' src={car} />
              </div>
              <span className={styles.transportSection_Info}>
                Felicitări, ai terminat secțiunea de gospodărie. Acum urmează secțiunea de
                alimentație.
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
            <div className={styles.transportSection_Footer}>
              <Button className={styles.transportSection_DownArrow} icon={<DownArrow />} />
              <Button className={styles.transportSection_UpArrow} icon={<UpArrow />} />
            </div>
          </>
        )}
      </div>
    </ModalSection>
  )
}
