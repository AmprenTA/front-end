import React from 'react'
import './Input.scss'
interface Props {
  name?: string
  type: 'number' | 'text' | 'password' | 'email'
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: any
  value?: any
  error?: any
  children?: any
  label?: string
  icon?: any
  additionalIcon?: any
  important?: boolean
  style?: any
}

const FormInput: React.FC<Props> = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  children,
  label,
  important,
  ...props
}) => {
  return (
    <div className='input-wrapper' style={props.style && props.style}>
      <label className='label-input' htmlFor={name}>
        {label}
        {important ? <span className='require'>*</span> : <></>}{' '}
      </label>
      <div className={error ? 'input-container error' : 'input-container'}>
        {props.icon ? <i className='right-icon'>{props.icon ? props.icon : null}</i> : null}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={props.icon ? 'input-field' : 'input-field-without-icon'}
        />
        <i className='left-icon'>{props.additionalIcon ? props.additionalIcon : null}</i>
      </div>
      {error && <p className='errorMessage'>{error}</p>}
    </div>
  )
}

export default FormInput
