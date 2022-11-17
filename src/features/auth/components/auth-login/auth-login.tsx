import Input from 'common/components/Input/Input'
import { PAGES_PATHS } from 'common/constants/constant'
import { Email } from 'features/auth/assets/icons/Email'
import { Eye } from 'features/auth/assets/icons/Eye'
import { Password } from 'features/auth/assets/icons/Password'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContainer } from '../auth-container/auth-container'

export const Login = () => {
  const [showPasswors, setShowPassword] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowPassword(false)
    }, 1000)
  }, [showPasswors])
  const navigate = useNavigate()
  const defaultValues = {
    email: '',
    password: '',
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = (data: any) => {
    reset()
  }
  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='email'
            control={control}
            rules={{
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: '',
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                placeholder='namesurname@domain.com'
                type='text'
                icon={<Email />}
                label='Adresa de e-mail'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['email']?.message}
              />
            )}
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='password'
            control={control}
            rules={{
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: '',
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                placeholder='************'
                type={showPasswors ? 'text' : 'password'}
                icon={<Password />}
                additionalIcon={
                  <Eye style={{ cursor: 'pointer' }} onClick={() => setShowPassword(true)} />
                }
                label='Parola'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['password']?.message}
              />
            )}
          />
        </div>
        <div className='button-wrapper'>
          <button
            className='auth-register-button-try'
            onClick={() => {
              navigate(PAGES_PATHS.HOME)
            }}>
            Înregistrează-te
            <ArrowRight />
          </button>
        </div>
        <div className='auth-wrapper'>
          Nu ai un cont?
          <NavLink className='link' to={PAGES_PATHS.REGISTER}>
            {` ${'Inregistrează-te'}`}
          </NavLink>
        </div>
      </form>
    </AuthContainer>
  )
}
