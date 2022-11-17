import { Button } from 'common/components/Button/Button'
//import { CheckBox } from 'common/components/CheckBox/CheckBox'
// import { CustomDropdownOptionValue, DropeDown } from 'common/components/DropeDown/DropeDown'
import Input from 'common/components/Input/Input'
import { PAGES_PATHS } from 'common/constants/constant'

import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'

import style from '../transport-questions/transport-question.module.scss'

export const HouseholdQuestions = () => {
  const [stepNumber, setStepNumber] = useState<number>(1)
  const navigate = useNavigate()
  const question = (number: number, question: string) => {
    return (
      <div className={style.transportQuestion_Question}>
        <span className={style.transportQuestion_Number}>
          {number}
          <ArrowRight />
        </span>
        <span style={{ marginLeft: '12px' }}>{question} </span>
      </div>
    )
  }

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(1, 'Câtă electricitate ai consumat în această lună? (kwh) ?')}
            <div style={{ marginLeft: '26px', marginBottom: '26px' }}>
              <Input
                style={{ width: '380px' }}
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Care este valoarea consumului de gaze pentru această lună? (metru cub) ?',
            )}
            <div style={{ marginLeft: '26px', marginBottom: '26px' }}>
              <Input
                style={{ width: '530px' }}
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              3,
              'Care este valoarea consumului de lemne pentru această lună? (metru cub) ? ',
            )}
            <div style={{ marginLeft: '26px', marginBottom: '26px' }}>
              <Input
                style={{ width: '530px' }}
                type='text'
                placeholder='EX: 15'
                onChange={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
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
          connectorStyleConfig={{ activeColor: '#509046' }}
          styleConfig={{
            completedBgColor: '#509046',
            completedTextColor: '#509046',
            activeBgColor: '#FCD351',
            activeTextColor: '#FCD351',
            inactiveTextColor: '#e0e0e0',
            labelFontSize: '1px',
          }}
          activeStep={stepNumber}></Stepper>
        <div>{getStepContent(stepNumber)}</div>
        <div>
          <button
            className='button-try'
            style={{ width: '200px', marginLeft: '44px' }}
            onClick={() => {
              if (stepNumber === 2) {
                navigate(PAGES_PATHS.FOOD_SECTION)
              } else {
                setStepNumber(stepNumber + 1)
              }
            }}>
            Continua
            <ArrowRight />
          </button>
        </div>
      </div>
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
  )
}
