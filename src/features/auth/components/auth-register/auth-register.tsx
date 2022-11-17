import Input from 'common/components/Input/Input'
import { PersonalCard } from 'features/auth/assets/icons/PersonalCard'
import { AuthContainer } from '../auth-container/auth-container'
import { Controller, useForm } from 'react-hook-form'
import { Email } from 'features/auth/assets/icons/Email'
import { Address } from 'features/auth/assets/icons/Address'
import { Password } from 'features/auth/assets/icons/Password'
// import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import './auth-register.scss'
import { PAGES_PATHS } from 'common/constants/constant'
import { NavLink } from 'react-router-dom'
import { Eye } from 'features/auth/assets/icons/Eye'
import { useEffect, useState } from 'react'
import { ERROR_MESSAGE } from 'features/auth/constants/auth-constants'
import { Button } from 'common/components/Button/Button'
export const AuthRegister = () => {
  const [showPasswors, setShowPassword] = useState(false)
  const [showConfirmPasswors, setConfirmShowPassword] = useState(false)
  // const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setShowPassword(false)
      setConfirmShowPassword(false)
    }, 1000)
  }, [showPasswors, showConfirmPasswors])
  const defaultValues = {
    firstName: '',
    email: '',
    address: '',
    city: '',
    password: '',
    confirmPassword: '',
    accept: '',
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
            name='firstName'
            control={control}
            rules={{
              required: ERROR_MESSAGE.EMPTY_FIELD,
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
            name='email'
            control={control}
            rules={{
              required: ERROR_MESSAGE.INVALID_EMAIL,
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
            name='address'
            control={control}
            rules={{
              pattern: {
                value: /^[a-zA-Z]+$/g,
                message: '',
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                placeholder='Strada, Numărul, Cod poștal'
                type='text'
                icon={<Address />}
                label='Adresa'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['address']?.message}
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
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='confirmPassword'
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
                type={showConfirmPasswors ? 'text' : 'password'}
                icon={<Password />}
                additionalIcon={
                  <Eye style={{ cursor: 'pointer' }} onClick={() => setConfirmShowPassword(true)} />
                }
                label='repetă Parola'
                important={true}
                onChange={onChange}
                value={value}
                error={errors['confirmPassword']?.message}
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
          <NavLink className='link' to={PAGES_PATHS.LOGIN}>
            {` ${'Conectează-te'}`}
          </NavLink>
        </div>
      </form>
    </AuthContainer>
  )
}
