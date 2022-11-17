import { Button } from 'common/components/Button/Button'
import { RadioButton } from 'common/components/RadioButton/RadioButton'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { question } from 'features/quiz-sections/constants/constants'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import { useEffect, useState } from 'react'
import { Stepper } from 'react-form-stepper'

import style from '../transport-questions/transport-question.module.scss'

export const FoodQuestions = () => {
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [selected, setSelected] = useState('niciodata')
  const handleChange = (event: any) => {}
  useEffect(() => {
    setSelected('niciodata')
  }, [stepNumber])

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Cât de des mănânci carne de vită? (100g porția) ?',
              <RadioButton
                selected={selected}
                setSelected={setSelected}
                handleChange={handleChange}
              />,
              '100%',
            )}
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Cât de des mănânci carne de oaie? (100g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
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
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Cât de des mănânci carne de porc? (100g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      case 5:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              5,
              'Cât de des mănânci carne de pește? (140g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
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
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )

      case 7:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              7,
              'Cât de des consumi brânzeturi? (30g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      case 8:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              8,
              'Cât de des consumi ouă? (120g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      case 9:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              9,
              'Cât de des consumi cafea? (120g porția) ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
            <div>
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>
        )
      case 10:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              10,
              'Cât de des consumi legume?(80g porția)  ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      case 11:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              11,
              'Cât de des consumi pâine?(36g porția)  ?',
              <RadioButton
                handleChange={handleChange}
                selected={selected}
                setSelected={setSelected}
              />,
              '100%',
            )}
          </div>
        )
      default:
        return (
          <p className={style.transportQuestion_CongradualtionText}>
            Felicitări, ai terminat de completat formularul! Ești gata să vezi rezultatele?
          </p>
        )
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
