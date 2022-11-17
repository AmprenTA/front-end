import { Button } from 'common/components/Button/Button'
import Input from 'common/components/Input/Input'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { question, stepperStyle } from 'features/quiz-sections/constants/constants'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'

import style from '../transport-questions/transport-question.module.scss'

export const HouseholdQuestions = () => {
  const [stepNumber, setStepNumber] = useState<number>(1)

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Câtă electricitate ai consumat în această lună? (kwh) ?',
              <Input
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />,
              '306px',
            )}
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Care este valoarea consumului de gaze pentru această lună? (metru cub) ?',
              <Input
                style={{ width: '530px' }}
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />,
              '306px',
            )}
          </div>
        )
      case 3:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              3,
              'Care este valoarea consumului de lemne pentru această lună? (metru cub) ? ',
              <Input
                style={{ width: '530px' }}
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />,
              '306px',
            )}
          </div>
        )
      default:
        return 'Unknown step'
    }
  }
  return (
    <div className={style.transportQuestion}>
      <div className={style.transportQuestion_Body}>
        <Stepper
          steps={[{ label: '.' }, { label: '.' }, { label: '.' }]}
          className={style.transportQuestion_Stepper}
          connectorStyleConfig={stepperStyle}
          activeStep={stepNumber}></Stepper>
        <div>{getStepContent(stepNumber)}</div>
        <div className={style.transportQuestion_Footer}>
          <Button
            onClick={() => {
              setStepNumber(stepNumber + 1)
            }}
            className={style.transportQuestion_DownArrow}
            icon={<DownArrow />}
          />
          <Button
            onClick={() => {
              setStepNumber(stepNumber - 1)
            }}
            className={style.transportQuestion_UpArrow}
            icon={<UpArrow />}
          />
        </div>
      </div>
    </div>
  )
}
