import { Apple } from 'common/assets/icons/Apple'
import React from 'react'
import style from './RadioButton.module.scss'
interface Props {
  handleChange: (event: any) => void
  value: any
  name: string
}
export const RadioButton: React.FC<Props> = ({ handleChange, ...props }) => {
  return (
    <div className={style.radioButton}>
      <div className={style.radioButton_Body}>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            value={0}
            name={props.name}
            checked={+props.value === 0}
            onChange={handleChange}
          />
          <Apple checked={+props.value === 0} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>NICIODATA</span>
          <span className={style.radioButton_Description}>0g/lună</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name={props.name}
            value={1}
            checked={props.value === 1}
            onChange={handleChange}
          />
          <Apple checked={1 === props.value} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Rar</span>
          <span className={style.radioButton_Description}>1-2 ori pe lună</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name={props.name}
            checked={2 === props.value}
            value={2}
            onChange={handleChange}
          />
          <Apple checked={2 === props.value} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Câteodată</span>
          <span className={style.radioButton_Description}>1-2 ori pe săptămână</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name={props.name}
            checked={3 === props.value}
            value={3}
            onChange={handleChange}
          />
          <Apple checked={3 === props.value} fill={'#222122'} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Des</span>
          <span className={style.radioButton_Description}>în fiecare zi</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name={props.name}
            value={4}
            checked={props.value === 4}
            onChange={handleChange}
          />
          <Apple checked={props.value === 4} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Foarte Des</span>
          <span className={style.radioButton_Description}>De mai multe ori pe zi</span>
        </div>
      </div>
    </div>
  )
}
