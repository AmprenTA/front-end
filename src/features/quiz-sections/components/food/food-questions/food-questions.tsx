import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import { RadioButton } from 'common/components/RadioButton/RadioButton'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { question, stepperStyle } from 'features/quiz-sections/constants/constants'
import { Food } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'
import style from '../../transport/transport-questions/transport-question.module.scss'

interface Props {
  footPrintId: any
}
export const FoodQuestions: React.FC<Props> = ({ ...props }) => {
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [food, setFood] = useState<Food>({
    beef: 0,
    lamb: 0,
    poultry: 0,
    pork: 0,
    fish: 0,
    milk_based: 0,
    cheese: 0,
    eggs: 0,
    coffee: 0,
    vegetables: 0,
    bread: 0,
    footprint_id: 0,
  })
  const navigate = useNavigate()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFood({ ...food, [name]: value })
  }
  const handleSubmitAnswers = async () => {
    const paylaod: Food = {
      beef: +food.beef,
      lamb: +food.lamb,
      poultry: +food.poultry,
      pork: +food.pork,
      fish: +food.fish,
      milk_based: +food.milk_based,
      cheese: +food.cheese,
      eggs: +food.eggs,
      coffee: +food.coffee,
      vegetables: +food.vegetables,
      bread: +food.bread,
      footprint_id: props.footPrintId,
    }
    try {
      const response: any = await api.post(`foods`, paylaod)
      navigate(`/rezultate/${response.data.footprint_id}`)
      return response.data.footprint_id
    } catch (err) {
      console.log('Error', err.response.data)
    }
  }

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Cât de des mănânci carne de vită? (100g porția) ?',
              <RadioButton name={'beef'} value={+food.beef} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Cât de des mănânci carne de oaie? (100g porția) ?',
              <RadioButton name={'lamb'} value={+food.lamb} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
            <div></div>
          </div>
        )
      case 3:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              3,
              'Cât de des mănânci carne de pui? (100g porția) ?',
              <RadioButton name={'poultry'} value={+food.poultry} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Cât de des mănânci carne de porc? (100g porția) ?',
              <RadioButton name='pork' value={+food.pork} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 5:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              5,
              'Cât de des mănânci carne de pește? (140g porția) ?',
              <RadioButton name='fish' value={+food.fish} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 6:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              6,
              'Cât de des consumi produse lactate? (200ml porția) ?',
              <RadioButton
                name='milk_based'
                value={+food.milk_based}
                handleChange={handleChange}
              />,
              '80%',
              '-26px',
            )}
          </div>
        )

      case 7:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              7,
              'Cât de des consumi brânzeturi? (30g porția) ?',
              <RadioButton name='cheese' value={+food.cheese} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 8:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              8,
              'Cât de des consumi ouă? (120g porția) ?',
              <RadioButton name='eggs' value={+food.eggs} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 9:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              9,
              'Cât de des consumi cafea? (120g porția) ?',
              <RadioButton name='coffee' value={+food.coffee} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 10:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              10,
              'Cât de des consumi legume?(80g porția)  ?',
              <RadioButton
                name='vegetables'
                value={+food.vegetables}
                handleChange={handleChange}
              />,
              '80%',
              '-26px',
            )}
          </div>
        )
      case 11:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              11,
              'Cât de des consumi pâine?(36g porția)  ?',
              <RadioButton name='bread' value={+food.bread} handleChange={handleChange} />,
              '80%',
              '-26px',
            )}
          </div>
        )
      default:
        return (
          <div style={{ marginLeft: '40px', marginTop: '80px' }}>
            <p className={style.transportQuestion_CongradualtionText}>
              Felicitări, ai terminat de completat formularul! Ești gata să vezi rezultatele?
            </p>
            <button
              className='button-try'
              onClick={(e) => {
                handleSubmitAnswers()
              }}>
              Da, sunt gata
              <ArrowRight />
            </button>
          </div>
        )
    }
  }
  const isValid = () => {
    switch (stepNumber) {
      case 1:
        return food.beef > 0 ? false : true
      case 2:
        return food.lamb > 0 ? false : true
      case 3:
        return food.poultry > 0 ? false : true
      case 4:
        return food.pork > 0 ? false : true
      case 5:
        return food.fish > 0 ? false : true
      case 6:
        return food.milk_based > 0 ? false : true
      case 7:
        return food.cheese > 0 ? false : true
      case 8:
        return food.eggs > 0 ? false : true
      case 9:
        return food.coffee > 0 ? false : true
      case 10:
        return food.vegetables > 0 ? false : true
      case 11:
        return food.bread > 0 ? false : true
      case 12:
        return false

      default:
        return true
    }
  }
  return (
    <div className={style.transportQuestion}>
      <div className={style.transportQuestion_Body}>
        <Stepper
          steps={[
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
            { label: '.' },
          ]}
          className={style.transportQuestion_Stepper}
          connectorStyleConfig={{ activeColor: '#509046' }}
          styleConfig={stepperStyle}
          activeStep={stepNumber}></Stepper>
        <div>{getStepContent(stepNumber)}</div>
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
