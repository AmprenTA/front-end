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
    beef: '',
    lamb: '',
    poultry: '',
    pork: '',
    fish: '',
    milk_based: '',
    cheese: '',
    eggs: '',
    coffee: '',
    vegetables: '',
    bread: '',
    footprint_id: '',
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
      footprint_id: +props.footPrintId,
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
              'C??t de des m??n??nci carne de vit??? (100g por??ia) ?',
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
              'C??t de des m??n??nci carne de oaie? (100g por??ia) ?',
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
              'C??t de des m??n??nci carne de pui? (100g por??ia) ?',
              <RadioButton name='poultry' value={+food.poultry} handleChange={handleChange} />,
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
              'C??t de des m??n??nci carne de porc? (100g por??ia) ?',
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
              'C??t de des m??n??nci carne de pe??te? (140g por??ia) ?',
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
              'C??t de des consumi produse lactate? (200ml por??ia) ?',
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
              'C??t de des consumi br??nzeturi? (30g por??ia) ?',
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
              'C??t de des consumi ou??? (120g por??ia) ?',
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
              'C??t de des consumi cafea? (120g por??ia) ?',
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
              'C??t de des consumi legume?(80g por??ia)  ?',
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
              'C??t de des consumi p??ine?(36g por??ia)  ?',
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
              Felicit??ri, ai terminat de completat formularul! E??ti gata s?? vezi rezultatele?
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

  // const isValid = () => {
  //   switch (stepNumber) {
  //     case 1:
  //       return food.beef !== '' ? false : true
  //     case 2:
  //       return food.lamb !== '' ? false : true
  //     case 3:
  //       return food.poultry !== '' ? false : false
  //     case 4:
  //       return food.pork !== '' ? false : true
  //     case 5:
  //       return food.fish !== '' ? false : true
  //     case 6:
  //       return food.milk_based !== '' ? false : true
  //     case 7:
  //       return food.cheese !== '' ? false : true
  //     case 8:
  //       return food.eggs !== '' ? false : true
  //     case 9:
  //       return food.coffee !== '' ? false : true
  //     case 10:
  //       return food.vegetables !== '' ? false : true
  //     case 11:
  //       return food.bread !== '' ? false : true
  //     case 12:
  //       return false

  //     default:
  //       return false
  //   }
  // }
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
