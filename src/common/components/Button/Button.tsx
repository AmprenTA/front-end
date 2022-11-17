import classNames from 'classnames'
import { Button as BaseButton } from 'primereact/button'

interface Props {
  className?: string
  disabled?: boolean
  children?: string
  [key: string]: any
}

export const Button = ({ mode, className, children, ...props }: Props) => {
  return (
    <BaseButton
      label={children}
      disabled={props.disabled}
      className={classNames(className)}
      {...props}
    />
  )
}
