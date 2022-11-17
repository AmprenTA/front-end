import { CustomDropdownOptionValue } from 'common/components/DropeDown/DropeDown'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import style from '../components/transport-questions/transport-question.module.scss'

export const carboranti: Array<CustomDropdownOptionValue> = [
  { value: 0, text: 'Disel' },
  { value: 1, text: 'Benzina' },
  { value: 2, text: 'GPL' },
  { value: 3, text: 'EV' },
  { value: 4, text: 'Hibrid' },
]
export const answears = [
  { variant: 'A.', answear: 'Da' },
  { variant: 'B.', answear: 'Nu' },
]

export const stepperStyle = {
  completedBgColor: '#509046',
  completedTextColor: '#509046',
  activeBgColor: '#FCD351',
  activeTextColor: '#FCD351',
  inactiveTextColor: '#e0e0e0',
  labelFontSize: '1px',
}
export const orase: Array<CustomDropdownOptionValue> = [
  { value: 0, text: 'Iasi' },
  { value: 1, text: 'Suceava' },
  { value: 2, text: 'Bucuresti' },
  { value: 3, text: 'Timisoara' },
  { value: 4, text: 'Oradea' },
  { value: 5, text: 'Alba Iulia' },
  { value: 7, text: 'Craiova' },
  { value: 8, text: 'Targu Mures' },
]
export const tarnsportOptions: Array<CustomDropdownOptionValue> = [
  { value: 0, text: 'Tren' },
  { value: 1, text: 'Autobuz' },
]
export const question = (number: number, question: string, children: any, width: string) => {
  return (
    <div className={style.transportQuestion_Question}>
      <div style={{ display: 'flex', width: '100%' }}>
        <span className={style.transportQuestion_Number}>
          {number}
          <ArrowRight />
        </span>
        <span style={{ marginLeft: '12px' }} className={style.transportQuestion_QuestionSpan}>
          {question}
        </span>
      </div>
      <div className={style.transportQuestion_QuestionChildren}>
        <div style={{ width: width }}>{children}</div>
      </div>
    </div>
  )
}
