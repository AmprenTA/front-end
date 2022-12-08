import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import Input from 'common/components/Input/Input'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { question, stepperStyle } from 'features/quiz-sections/constants/constants'
import { Household } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'
import style from '../../transport/transport-questions/transport-question.module.scss'
interface Props {
  foodPrintId: any
}
export const HouseholdQuestions: React.FC<Props> = ({ ...props }) => {
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [household, setHousehold] = useState<Household>({
    electricity: '',
    natural_gas: '',
    wood: '',
  })

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
        return household.electricity !== '' ? false : true
      case 2:
        return household.natural_gas !== '' ? false : true
      case 3:
        return household.wood !== '' ? false : true

      case 5:
        return false

      default:
        return true
    }
  }
  const handleSubmit = async () => {
    const paylaod: Household = {
      electricity: +household.electricity,
      natural_gas: +household.natural_gas,
      wood: +household.wood,
      footprint_id: +props.foodPrintId,
    }
    try {
      const response: any = await api.post(`houses`, paylaod)
      navigate(`/mancare/${response.data.footprint_id}`)
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
          {/* {stepNumber === 3 ? (
            <div className={style.transportQuestion_ButtonContainer}>
              <button className={style.transportQuestion_Button} onClick={handleSubmit}>
                Treci mai departe
                <ArrowRight />
              </button>
            </div>
          ) : (
            <></>
          )} */}
        </div>
        <div className={style.transportQuestion_Footer}>
          <Button
            disabled={isValid()}
            style={isValid() ? { background: '#EEEEEE', border: '2px solid #959595' } : null}
            onClick={() => {
              if (stepNumber === 3 && household.wood !== '') {
                handleSubmit()
              } else {
                setStepNumber(stepNumber + 1)
              }
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
