import Input from 'common/components/Input/Input'
import { PersonalCard } from 'features/auth/assets/icons/PersonalCard'
import { AuthContainer } from '../auth-container/auth-container'
import { Controller, useForm } from 'react-hook-form'
import { Email } from 'features/auth/assets/icons/Email'
import { Password } from 'features/auth/assets/icons/Password'
import './auth-register.scss'
import { PAGES_PATHS } from 'common/constants/constant'
import { NavLink, useNavigate } from 'react-router-dom'
import { Eye } from 'features/auth/assets/icons/Eye'
import { useEffect, useState } from 'react'
import { ERROR_MESSAGE } from 'features/auth/constants/auth-constants'
import { Button } from 'common/components/Button/Button'
import { Register } from 'features/auth/models/models'
import api from 'common/api/api'
export const AuthRegister = () => {
  const [showPasswors, setShowPassword] = useState(false)
  const [showConfirmPasswors, setConfirmShowPassword] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setShowPassword(false)
      setConfirmShowPassword(false)
    }, 1000)
  }, [showPasswors, showConfirmPasswors])
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

    accept: '',
  }
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = async (data: any) => {
    const payload: Register = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
    }
    try {
      const response: any = await api.post(`houses`, payload)
      if (response === 201) {
        navigate(PAGES_PATHS.HOME)
      }
      return response
    } catch (err) {
      console.log('Error', err.response.data)
    }
    reset()
  }
  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='firstName'
            control={control}
            rules={{
              required: ERROR_MESSAGE.EMPTY_FIELD,
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: ERROR_MESSAGE.ALPHABETS_ONLY,
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                icon={<PersonalCard />}
                type={'text'}
                placeholder={'John Wick'}
                label='Nume și prenume'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['firstName']?.message}
              />
            )}
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='lastName'
            control={control}
            rules={{
              required: ERROR_MESSAGE.EMPTY_FIELD,
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: ERROR_MESSAGE.ALPHABETS_ONLY,
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                icon={<PersonalCard />}
                type={'text'}
                placeholder={'John Wick'}
                label='Prenume'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['lastName']?.message}
              />
            )}
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: ERROR_MESSAGE.EMPTY_FIELD,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: ERROR_MESSAGE.INVALID_EMAIL,
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
              required: ERROR_MESSAGE.EMPTY_FIELD,
              pattern: {
                value: /.{8,}$/,
                message: ERROR_MESSAGE.PASSWORD_VALIDATION,
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
          <Button className='auth-register-button-try'>
            Înregistrează-te
            {/* <ArrowRight /> */}
          </Button>
        </div>
        <div className='auth-wrapper'>
          Ai deja un cont?
          <NavLink style={{ marginLeft: '8px' }} className='link' to={PAGES_PATHS.LOGIN}>
            {` ${'Conectează-te'}`}
          </NavLink>
        </div>
      </form>
    </AuthContainer>
  )
}
