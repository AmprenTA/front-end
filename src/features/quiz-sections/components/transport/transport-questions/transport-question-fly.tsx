import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import { CheckBoxItem } from 'common/components/CheckBox/CheckBox'
import { CustomDropdownOptionValue, DropeDown } from 'common/components/DropeDown/DropeDown'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import { answears, question } from 'features/quiz-sections/constants/constants'
import { Car, Fly } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import React, { useEffect, useState } from 'react'
import { Stepper } from 'react-form-stepper'

import { ModalSection } from '../../modal-section.tsx/modal-section'
import { TransportBus } from './transport-question-bus'
import style from './transport-question.module.scss'

interface Props {
  arrayOfCars: Array<Car>
  location: string
}

export const TransportFly: React.FC<Props> = ({ ...props }) => {
  const [showBusQuestion, setShowBusQuestion] = useState<boolean>(false)
  const [checked, setChecked] = React.useState<string>('')
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [newFly, setNewFly] = useState<string>('')
  const [multipleFly, setMultipleFly] = useState<Array<Fly>>([])
  const [flyOptions, setFlyOptions] = useState<Array<any>>([])
  const [fly, setFly] = useState<Fly>({
    from: '',
    to: '',
  })

  useEffect(() => {
    const fetchFlyes = async () => {
      const response: any = await api.get(`flights/airports`)
      setFlyOptions(response.data)
    }
    fetchFlyes()
  }, [])

  const dropeDownFlyOptions: Array<CustomDropdownOptionValue> = flyOptions.map((fly) => ({
    value: fly.id,
    text: fly.name,
  }))
  useEffect(() => {
    setChecked('')
    setNewFly('')
  }, [stepNumber])

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setChecked(value)
    if (value === 'Da') {
      setNewFly('Da')
    }
    if (value === 'Nu') {
      setNewFly('Nu')
    }
  }
  const handleChangeDropeDown = (event: any) => {
    const { name, value } = event.target

    setFly({ ...fly!, [name]: value })
  }
  useEffect(() => {
    if (stepNumber === 1 && newFly === 'Nu') {
      setShowBusQuestion(true)
    } else {
      setShowBusQuestion(false)
    }
  }, [checked, stepNumber])

  useEffect(() => {
    const newArray: any = [...multipleFly]
    const from = dropeDownFlyOptions.find((item) => item.value === +fly.from)
    const to = dropeDownFlyOptions.find((item) => item.value === +fly.to)
    const newFlyObj = {
      from: from?.text,
      to: to?.text,
    }
    newArray.push(newFlyObj)

    if (newFly === 'Da' && stepNumber === 4) {
      setFly({ from: '', to: '' })
      setMultipleFly(newArray)
      setStepNumber(2)
    }
    if (newFly === 'Nu' && stepNumber === 4) {
      setMultipleFly(newArray)
      setShowBusQuestion(true)
    }
  }, [stepNumber, newFly])
  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Ai zburat cu avionul în ultima lună?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
              '306px',
            )}
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Care este orașul de plecare? ',
              <DropeDown
                name='from'
                placeholder={'Selectează carburant'}
                options={dropeDownFlyOptions}
                value={fly.from}
                onChange={handleChangeDropeDown}
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
              'Care este orașul destinție?',
              <DropeDown
                name='to'
                placeholder={'Selectează carburant'}
                options={dropeDownFlyOptions}
                value={fly.to}
                onChange={handleChangeDropeDown}
              />,
              '306px',
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Mai ai un zbor cu avionul pe care vrei să-l adaugi?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
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
        return newFly !== '' ? false : true
      case 2:
        return fly!.from !== '' ? false : true
      case 3:
        return fly.to !== '' ? false : true

      default:
        return true
    }
  }
  return (
    <ModalSection>
      <div className={style.transportQuestion}>
        <div className={style.transportQuestion_Body}>
          {showBusQuestion ? (
            <>
              <TransportBus
                location={props.location}
                multipleFly={multipleFly}
                arrayOfCars={props.arrayOfCars}
              />
            </>
          ) : (
            <>
              <Stepper
                steps={[{ label: '1.' }, { label: '2.' }, { label: '3.' }, { label: '4.' }]}
                className={style.transportQuestion_Stepper}
                // connectorStyleConfig={{ activeColor: '#509046' }}
                // styleConfig={stepperStyle}
                activeStep={stepNumber}></Stepper>{' '}
              <div>{getStepContent(stepNumber)}</div>
              <div className={style.transportQuestion_Footer}>
                <Button
                  disabled={isValid()}
                  style={isValid() ? { background: '#EEEEEE', border: '2px solid #959595' } : null}
                  onClick={() => {
                    setStepNumber(stepNumber + 1)
                  }}
                  className={style.transportQuestion_DownArrow}
                  icon={<DownArrow />}
                />

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
    </ModalSection>
  )
}
