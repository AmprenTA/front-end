import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import Input from 'common/components/Input/Input'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { question, stepperStyle } from 'features/quiz-sections/constants/constants'
import { Household } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'

import style from '../transport-questions/transport-question.module.scss'

export const HouseholdQuestions = () => {
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [household, setHousehold] = useState<Household>({ electricity: 0, natural_gas: 0, wood: 0 })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setHousehold({ ...household!, [name]: value })
  }
  const navigate = useNavigate()
  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Câtă electricitate ai consumat în această lună? (kwh) ?',
              <Input
                name='electricity'
                value={household.electricity}
                type='number'
                placeholder='EX: 15'
                onChange={handleChangeInput}
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
                value={household.natural_gas}
                name='natural_gas'
                style={{ width: '530px' }}
                type='number'
                placeholder='EX: 15'
                onChange={handleChangeInput}
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
                value={household.wood}
                name='wood'
                style={{ width: '530px' }}
                type='number'
                placeholder='EX: 15'
                onChange={handleChangeInput}
              />,
              '306px',
            )}
          </div>
        )
      default:
        return 'Unknown step'
    }
  }
  const isValid = () => {
    switch (stepNumber) {
      case 1:
        return household.electricity > 0 ? false : true
      case 2:
        return household.natural_gas > 0 ? false : true
      case 3:
        return household.wood > 0 ? false : true

      case 5:
        return false

      default:
        return true
    }
  }
  const handleSubmit = async () => {
    const paylaod: Household = {
      electricity: household.electricity,
      natural_gas: household.natural_gas,
      wood: household.wood,
      footprint_id: 1,
    }
    try {
      const response: any = await api.post(`houses`, paylaod)
      if (response === 201) {
        navigate(PAGES_PATHS.FOOD_SECTION)
      }
      return response
    } catch (err) {
      console.log('Error', err.response.data)
    }
  }
  return (
    <div className={style.transportQuestion}>
      <div className={style.transportQuestion_Body}>
        <Stepper
          steps={[{ label: '.' }, { label: '.' }, { label: '.' }]}
          className={style.transportQuestion_Stepper}
          connectorStyleConfig={{ activeColor: '#509046' }}
          styleConfig={stepperStyle}
          activeStep={stepNumber}
        />
        <div>
          {getStepContent(stepNumber)}{' '}
          {stepNumber === 3 ? (
            <div className={style.transportQuestion_ButtonContainer}>
              <button className={style.transportQuestion_Button} onClick={handleSubmit}>
                Treci mai departe
                <ArrowRight />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={style.transportQuestion_Footer}>
          <Button
            disabled={isValid() || stepNumber === 3}
            style={
              isValid() || stepNumber === 3
                ? { background: '#EEEEEE', border: '2px solid #959595' }
                : null
            }
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
