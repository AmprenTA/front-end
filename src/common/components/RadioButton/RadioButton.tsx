import { Apple } from 'common/assets/icons/Apple'
import React from 'react'
import style from './RadioButton.module.scss'
interface Props {
  selected: string
  setSelected: (selected: string) => void
  handleChange: (event: any) => void
}
export const RadioButton: React.FC<Props> = ({ selected, setSelected, handleChange, ...props }) => {
  return (
    <div className={style.radioButton}>
      <div className={style.radioButton_Body}>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name='niciodata'
            checked={selected === 'niciodata'}
            onChange={(e) => handleChange(e)}
          />
          <Apple checked={selected === 'niciodata'} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>NICIODATA</span>
          <span className={style.radioButton_Description}>0g/lună</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name='rar'
            checked={selected === 'rar'}
            onChange={(e) => handleChange(e)}
          />
          <Apple checked={selected === 'rar'} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Rar</span>
          <span className={style.radioButton_Description}>1-2 ori pe lună</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name='cateodata'
            checked={selected === 'cateodata'}
            onChange={handleChange}
          />
          <Apple checked={selected === 'cateodata'} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Câteodată</span>
          <span className={style.radioButton_Description}>1-2 ori pe săptămână</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name='des'
            checked={selected === 'des'}
            onChange={(e) => handleChange(e)}
          />
          <Apple
            checked={selected === 'des'}
            fill={'#222122'}
            className={style.radioButton_Apple}
          />
          <span className={style.radioButton_Title}>Des</span>
          <span className={style.radioButton_Description}>în fiecare zi</span>
        </div>
        <div className={style.radioButton_Item}>
          <input
            className={style.radioButton_Input}
            type='radio'
            name='foarte des'
            checked={selected === 'foarte des'}
            onChange={(e) => handleChange(e)}
          />
          <Apple checked={selected === 'foarte des'} className={style.radioButton_Apple} />
          <span className={style.radioButton_Title}>Foarte Des</span>
          <span className={style.radioButton_Description}>De mai multe ori pe zi</span>
        </div>
      </div>
    </div>
  )
}
