import React from 'react'
import './CheckBox.scss'
export type QuestionType = {
  variant: string
  answear: string
}
interface Props {
  answears: Array<QuestionType>
  onChange: (e: any) => void
  cheked: string
}
export const CheckBoxItem: React.FC<Props> = ({ ...props }) => {
  return (
    <div style={{ marginTop: '32px' }}>
      {props.answears.map((answear, index) => {
        return (
          <div key={index} className='container-checkmark'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='option'>{answear.variant}</div>
              <span className='checkmark'>{answear.answear}</span>
            </div>
            <div className='checkbox'>
              <input
                checked={props.cheked === answear.answear}
                value={answear.answear}
                type='checkbox'
                onChange={props.onChange}
              />
              <label>{''}</label>
            </div>
          </div>
        )
      })}
    </div>
  )
}
