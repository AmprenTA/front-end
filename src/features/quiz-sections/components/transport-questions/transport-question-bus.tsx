import { Button } from 'common/components/Button/Button'
import { CheckBoxItem } from 'common/components/CheckBox/CheckBox'
import { DropeDown } from 'common/components/DropeDown/DropeDown'
import Input from 'common/components/Input/Input'
import { PAGES_PATHS } from 'common/constants/constant'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import {
  answears,
  tarnsportOptions,
  question,
  stepperStyle,
} from 'features/quiz-sections/constants/constants'
import { Bus, Car, Fly } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import React, { useEffect, useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'
import { ModalSection } from '../modal-section.tsx/modal-section'
import style from './transport-question.module.scss'

interface Props {
  multipleFly: Array<Fly>
  arrayOfCars: Array<Car>
}
export const TransportBus: React.FC<Props> = ({ ...props }) => {
  const [checked, setChecked] = React.useState<string>('')
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [newBas, setNewBas] = useState<boolean | undefined>(false)
  const [multipleBus, setMultipleBus] = useState<Array<Bus>>([])
  const [bus, setBus] = useState<Bus>({ transport_type: undefined, total_km: undefined })
  const navigate = useNavigate()

  useEffect(() => {
    setChecked('')
    setNewBas(undefined)
  }, [stepNumber])
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setChecked(value)
    if (value === 'Da') {
      setNewBas(true)
    }
    if (value === 'Nu') {
      setNewBas(false)
    }
  }
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBus({ ...bus!, [name]: value })
  }
  useEffect(() => {
    if (stepNumber === 1 && newBas === false) {
      navigate(PAGES_PATHS.HOUSEHOLD_SECTION)
    }
  }, [checked, stepNumber])
  const handleChangeDropeDown = (event: any) => {
    setBus({ ...bus!, transport_type: event.target.value })
  }
  function getStepContent(step: number) {
    switch (step) {
      case 1:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              1,
              'Folosești transportul în comun?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
            )}
            <div className={style.transportQuestion_Answear} style={{ marginBottom: '32px' }}></div>
          </div>
        )
      case 2:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              2,
              'Câți km ai parcurs (în medie) în ultima lună cu transportul în comun?',
              <Input
                style={{ width: '305px' }}
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
              'Ce tip de transport în comun folosești?',
              <DropeDown
                name='transport_type'
                placeholder={'Selectează carburant'}
                options={tarnsportOptions}
                onChange={handleChangeDropeDown}
              />,
            )}
          </div>
        )
      case 4:
        return (
          <div className={style.transportQuestion_QuestionContainer}>
            {question(
              4,
              'Mai ai un mijloc de transport în comun pe care vrei să-l adaugi?',
              <CheckBoxItem cheked={checked} onChange={handleCheckbox} answears={answears} />,
            )}
          </div>
        )
      default:
        return 'Unknown step'
    }
  }
  useEffect(() => {
    const newArray = [...multipleBus]
    newArray.push(bus)

    if (newBas === true && stepNumber === 4) {
      setMultipleBus(newArray)
      setStepNumber(2)
    }
    if (newBas === false && stepNumber === 4) {
      setMultipleBus(newArray)
      navigate(PAGES_PATHS.HOUSEHOLD_SECTION)
    }
  }, [stepNumber, newBas])
  return (
    <ModalSection>
      <div className={style.transportQuestion}>
        <div className={style.transportQuestion_Body}>
          <Stepper
            steps={[{ label: '.' }, { label: '.' }, { label: '.' }, { label: '.' }]}
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
    </ModalSection>
  )
}
