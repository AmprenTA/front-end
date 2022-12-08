import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import { CheckBoxItem } from 'common/components/CheckBox/CheckBox'
import { CustomDropdownOptionValue, DropeDown } from 'common/components/DropeDown/DropeDown'
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
  const [haveCar, setHaveCar] = useState<string>(' ')
  const [carAnswers, setCarAnswear] = useState<Array<Car>>([])
  const [countiesOptions, setCountiesOptions] = useState<Array<any>>([])
  const [locationsOptions, setLocationsOptions] = useState<Array<any>>([])
  const [counties, setCounties] = useState<number>(0)
  const [location, setLocation] = useState<number>(0)
  const [car, setCar] = useState<Car>({
    fuel_type: '',
    total_km: 0,
    fuel_consumption: '',
  })
  const countiesDownFlyOptions: Array<CustomDropdownOptionValue> = countiesOptions!.map(
    (location) => ({
      value: location!.id,
      text: location!.name,
    }),
  )
  const l = countiesDownFlyOptions.find((item) => item.value === +counties)

  useEffect(() => {
    if (stepNumber === 2) {
      api
        .get(`/locations?county=${l?.text!}`)
        .then((response) => {
          setLocationsOptions(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [l?.text, stepNumber])

  const locationsDownFlyOptions: Array<CustomDropdownOptionValue> = locationsOptions!.map(
    (location) => ({
      value: location!.id,
      text: location!.name,
    }),
  )
  useEffect(() => {
    api
      .get(`/locations/counties`)
      .then((response) => {
        setCountiesOptions(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setChecked('')
    setHaveCar('')
  }, [stepNumber])

  useEffect(() => {
    if (stepNumber === 3 && haveCar === 'Nu') {
      const cars = {
        fuel_type: 0,
        fuel_consumption: 0,
        total_km: 0,
        location: 'Şona, Alba',
      }
      setCarAnswear([cars])
      setShowFlyQuestion(true)
    } else {
      setShowFlyQuestion(false)
    }
  }, [checked, stepNumber])

  ///in acest array vor fi salvate toate masinile adaugate
  useEffect(() => {
    const newArray = [...carAnswers]
    const newCar = {
      fuel_type: +car.fuel_type,
      fuel_consumption: +car.total_km,
      total_km: +car.total_km,
      location: 'Şona, Alba',
    }
    newArray.push(newCar)

    if (haveCar === 'Da' && stepNumber === 7) {
      setCar({ fuel_type: 0, total_km: 0, fuel_consumption: 0 })
      setCarAnswear(newArray)
      setStepNumber(4)
    }
    if (haveCar === 'Nu' && stepNumber === 7) {
      setCarAnswear(newArray)
      setShowFlyQuestion(true)
    }
  }, [stepNumber, haveCar])

  const handleChangeDropeDown = (event: any) => {
    setCar({ ...car!, fuel_type: event.target.value })
  }
  const handleChangeDropeDownCounties = (event: any) => {
    setCounties(+event.target.value)
  }
  const handleChangeDropeDownLocations = (event: any) => {
    setLocation(+event.target.value)
  }
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setChecked(value)
    if (value === 'Da') {
      setHaveCar('Da')
    }
    if (value === 'Nu') {
      setHaveCar('Nu')
    }
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCar({ ...car!, [name]: value })
  }
  const isValid = () => {
    switch (stepNumber) {
      case 1:
        return counties >= 0 ? false : true
      case 2:
        return location >= 0 ? false : true
      case 3:
        return haveCar !== '' ? false : true
      case 4:
        return car!.total_km !== ' ' ? false : true
      case 5:
        return car.fuel_type >= 0 ? false : true
      case 6:
        return car!.fuel_consumption !== ' ' ? false : true
      case 7:
        return false

      default:
        return true
    }
  }
  const locationX = locationsDownFlyOptions.find((item) => item.value === +location)
  console.log(locationX)
  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Din ce judet esti ?',
              <DropeDown
                name='fuel_type'
                placeholder={'Selectează carburant'}
                options={countiesDownFlyOptions}
                onChange={handleChangeDropeDownCounties}
                value={counties}
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
              'Din ce localitate esti ?',
              <DropeDown
                name='fuel_type'
                placeholder={'Selectează carburant'}
                options={locationsDownFlyOptions}
                onChange={handleChangeDropeDownLocations}
                value={location}
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
              'Deții o mașină?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
              '306px',
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Câți km ai parcurs (în medie) în ultima lună?',
              <Input
                icon={false}
                style={{ marginTop: '20px' }}
                type='number'
                name='total_km'
                placeholder='EX: 15'
                onChange={handleChangeInput}
              />,
              '306px',
            )}
          </div>
        )
      case 5:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              5,
              'Ce tip de carburant folosești?',
              <DropeDown
                name='fuel_type'
                placeholder={'Selectează carburant'}
                options={carboranti}
                onChange={handleChangeDropeDown}
                value={car!.fuel_type}
              />,
              '306px',
            )}
          </div>
        )
      case 6:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              6,
              'Cât carburant consumă mașina în medie, pe lună? (litri/kwh)?',
              <Input
                style={{ marginTop: '20px' }}
                type='number'
                name='fuel_consumption'
                placeholder='EX: 15'
                onChange={handleChangeInput}
              />,
              '306px',
            )}
          </div>
        )
      case 7:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              7,
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
        {showFlyQuestion ? (
          <TransportFly
            arrayOfCars={carAnswers}
            location={locationX!.text === undefined ? '' : locationX!.text!}
          />
        ) : (
          <>
            <Stepper
              steps={[
                { label: '1.' },
                { label: '2.' },
                { label: '3.' },
                { label: '4.' },
                { label: '5.' },
                { label: '6.' },
                { label: '7.' },
              ]}
              className={style.transportQuestion_Stepper}
              connectorStyleConfig={{ activeColor: '#509046' }}
              styleConfig={stepperStyle}
              activeStep={stepNumber}></Stepper>
            <div>{getStepContent(stepNumber)}</div>
            <div className={style.transportQuestion_Footer}>
              {stepNumber === 7 ? (
                <></>
              ) : (
                <Button
                  disabled={isValid()}
                  style={isValid() ? { background: '#EEEEEE', border: '2px solid #959595' } : null}
                  onClick={() => {
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
