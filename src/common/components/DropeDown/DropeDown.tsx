import style from './DropeDown.module.scss'
export type CustomDropdownOptionValue = {
  value: number
  text: string
}
interface Props {
  placeholder: string
  value?: any
  name?: string
  options: Array<CustomDropdownOptionValue>
  onChange: (e: any) => void
}
export const DropeDown: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={style.dropeDown}>
      <select
        required={true}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}>
        {props.options.map((item, key) => {
          console.log(item.value)
          return (
            <option key={key} value={item.value} className={style.dropeDown_Options}>
              {item.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}
