import api from 'common/api/api'
import { Button } from 'common/components/Button/Button'
import { CheckBoxItem } from 'common/components/CheckBox/CheckBox'
import { DropeDown } from 'common/components/DropeDown/DropeDown'
import Input from 'common/components/Input/Input'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { UpArrow } from 'features/quiz-sections/assets/icons/UpArrow'
import {
  answears,
  tarnsportOptions,
  question,
  stepperStyle,
} from 'features/quiz-sections/constants/constants'
import { Bus, Car, Fly, Transport } from 'features/quiz-sections/models/transport-models'
import { DownArrow } from 'features/quiz/assets/icons/DownArrow'
import React, { useEffect, useState } from 'react'
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom'
import { ModalSection } from '../../modal-section.tsx/modal-section'
import style from './transport-question.module.scss'

interface Props {
  multipleFly: Array<Fly>
  arrayOfCars: Array<Car>
}
export const TransportBus: React.FC<Props> = ({ ...props }) => {
  const [checked, setChecked] = React.useState<string>('')
  const [stepNumber, setStepNumber] = useState<number>(1)
  const [newBas, setNewBas] = useState<string>('')
  const [multipleBus, setMultipleBus] = useState<Array<Bus>>([])
  const [bus, setBus] = useState<Bus>({ transport_type: '', total_km: 0 })
  const navigate = useNavigate()

  useEffect(() => {
    setChecked('')
    setNewBas('')
  }, [stepNumber])

  useEffect(() => {
    if (stepNumber === 1 && newBas === 'Nu') {
      const addTransport = async () => {
        const paylaod: Transport = {
          cars: props.arrayOfCars,
          flights: props.multipleFly,
          public_transports: multipleBus,
        }
        try {
          const response: any = await api.post(`transportations`, paylaod)
          navigate(`/gospodarie/${response.data.footprint_id}`)
          return response.data.footprint_id
        } catch (err) {
          console.log('Error', err.response.data)
        }
      }
      addTransport()
    }
  }, [checked, stepNumber])

  useEffect(() => {
    const newArray = [...multipleBus]
    const newBusType: any = {
      transport_type: +bus.transport_type,
      total_km: +bus.total_km,
    }
    newArray.push(newBusType)
    if (newBas === 'Nu' && stepNumber === 4) {
      setMultipleBus(newArray)
    }
    if (newBas === 'Da' && stepNumber === 4) {
      setBus({ transport_type: '', total_km: 0 })
      setMultipleBus(newArray)
      setStepNumber(2)
    }
  }, [stepNumber, newBas])

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setChecked(value)
    if (value === 'Da') {
      setNewBas('Da')
    }
    if (value === 'Nu') {
      setNewBas('Nu')
    }
  }
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBus({ ...bus!, [name]: value })
  }

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
              '306px',
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
              '306px',
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
              '306px',
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
        return newBas !== '' ? false : true
      case 2:
        return bus!.total_km > 0 ? false : true
      case 3:
        return bus!.transport_type > '' ? false : true

      default:
        return true
    }
  }
  const handleSubmitAnswers = async () => {
    const paylaod: Transport = {
      cars: props.arrayOfCars,
      flights: props.multipleFly,
      public_transports: multipleBus,
    }
    try {
      const response: any = await api.post(`transportations`, paylaod)
      navigate(`/gospodarie/${response.data.footprint_id}`)
      return response.data.footprint_id
    } catch (err) {
      console.log('Error', err.response.data)
    }
  }
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
          <div style={{ position: 'relative' }}>{getStepContent(stepNumber)}</div>
          {stepNumber === 4 && newBas === 'Nu' ? (
            <div className={style.transportQuestion_ButtonContainer}>
              <button className={style.transportQuestion_Button} onClick={handleSubmitAnswers}>
                Treci mai departe
                <ArrowRight />
              </button>
            </div>
          ) : (
            <></>
          )}
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
