import { Button } from 'common/components/Button/Button'
import { CheckBoxItem } from 'common/components/CheckBox/CheckBox'
import { DropeDown } from 'common/components/DropeDown/DropeDown'
import Input from 'common/components/Input/Input'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import {
  answears,
  carboranti,
  question,
  stepperStyle,
} from 'features/quiz-sections/constants/constants'
import { Car } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import React, { useEffect, useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { TransportFly } from './transport-question-fly'
import style from './transport-question.module.scss'

export const TransportQuestions = () => {
  const [checked, setChecked] = React.useState<string>('')
  const [showFlyQuestion, setShowFlyQuestion] = useState<boolean>(false)

  const [stepNumber, setStepNumber] = useState<number>(1)
  const [haveCar, setHaveCar] = useState<boolean | undefined>(undefined)
  const [arrayOfCars, setArrayOfCars] = useState<Array<Car>>([])
  const [error, setError] = useState<boolean>(false)
  const [car, setCar] = useState<Car>({
    fuel_type: undefined,
    total_km: undefined,
    fuel_consumption: undefined,
  })

  useEffect(() => {
    setChecked('')
    setHaveCar(undefined)
  }, [stepNumber])

  useEffect(() => {
    if (stepNumber === 1 && haveCar === false) {
      setShowFlyQuestion(true)
    } else {
      setShowFlyQuestion(false)
    }
  }, [checked, stepNumber])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCar({ ...car!, [name]: value })
  }

  const handleChangeDropeDown = (event: any) => {
    setCar({ ...car!, fuel_type: event.target.value })
  }
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setChecked(value)
    if (value === 'Da') {
      setHaveCar(true)
    }
    if (value === 'Nu') {
      setHaveCar(false)
    }
  }

  const handleError = () => {
    switch (stepNumber) {
      case 1:
        if (stepNumber === 1 && checked === '') {
          setError(true)
        }
        return error
      default:
        return setError(false)
    }
  }

  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Deții o mașină?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
            )}
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Câți km ai parcurs (în medie) în ultima lună?',
              <Input
                icon={false}
                style={{ marginTop: '20px' }}
                type='number'
                name='total_km'
                placeholder='EX: 15'
                onChange={handleChangeInput}
              />,
            )}
          </div>
        )
      case 3:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              3,
              'Ce tip de carburant folosești?',
              <DropeDown
                name='fuel_type'
                placeholder={'Selectează carburant'}
                options={carboranti}
                onChange={handleChangeDropeDown}
                value={car!.fuel_type!}
              />,
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Cât carburant consumă mașina în medie, pe lună? (litri/kwh)?',
              <Input
                style={{ marginTop: '20px' }}
                type='number'
                name='fuel_consumption'
                placeholder='EX: 15'
                onChange={handleChangeInput}
              />,
            )}
          </div>
        )
      case 5:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              5,
              'Mai ai o mașină pe care vrei să o adaugi?',
              <CheckBoxItem
                cheked={checked}
                onChange={(event: any) => {
                  handleCheckbox(event)
                  if (event.target.value === 'Nu') {
                    setShowFlyQuestion(true)
                  }
                }}
                answears={answears}
              />,
            )}
          </div>
        )
      default:
        return 'Unknown step'
    }
  }
  ///in acest array vor fi salvate toate masinile adaugate
  useEffect(() => {
    const newArray = [...arrayOfCars]
    newArray.push(car)

    if (haveCar === true && stepNumber === 5) {
      setArrayOfCars(newArray)
      setStepNumber(2)
    }
    if (haveCar === false && stepNumber === 5) {
      setArrayOfCars(newArray)
      setShowFlyQuestion(true)
    }
  }, [stepNumber, haveCar])
  return (
    <div className={style.transportQuestion}>
      <div className={style.transportQuestion_Body}>
        {showFlyQuestion ? (
          <TransportFly arrayOfCars={arrayOfCars} />
        ) : (
          <>
            <Stepper
              steps={[
                { label: '1.' },
                { label: '2.' },
                { label: '3.' },
                { label: '4.' },
                { label: '5.' },
              ]}
              className={style.transportQuestion_Stepper}
              connectorStyleConfig={{ activeColor: '#509046' }}
              styleConfig={stepperStyle}
              activeStep={stepNumber}></Stepper>
            <div>{getStepContent(stepNumber)}</div>
            {/* {error ? (
              <p className={style.transportQuestion_Error}>
                Ca sa poti trece la urmatorul pas, raspunde la intrebare.
              </p>
            ) : null} */}
            <div className={style.transportQuestion_Footer}>
              {stepNumber === 5 ? (
                <></>
              ) : (
                <Button
                  // disabled={error ? true : false}
                  style={error ? { background: '#EEEEEE' } : null}
                  onClick={() => {
                    handleError()
                    setStepNumber(stepNumber + 1)
                  }}
                  className={style.transportQuestion_DownArrow}
                  icon={<DownArrow />}
                />
              )}

              <Button
                disabled={stepNumber === 1 ? true : false}
                onClick={() => {
                  setStepNumber(stepNumber - 1)
                }}
                className={style.transportQuestion_UpArrow}
                icon={<UpArrow />}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
