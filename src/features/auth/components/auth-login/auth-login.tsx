import api from 'common/api/api'
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
import { LoginUser } from 'features/auth/models/models'
export const Login = () => {
  const [error, setError] = useState(false)
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
  const { control, handleSubmit, reset } = useForm({ defaultValues })

  const onSubmit = async (data: any) => {
    console.log(data)
    const payload: LoginUser = {
      email: data.email,
      password: data.password,
    }
    try {
      const response: any = await api.post(`users/sign_in`, payload)
      if (response.status === 201) {
        localStorage.setItem('user', JSON.stringify(response.data.auth_token))
        navigate(PAGES_PATHS.HOME)
      }
      console.log(response)
      return response
    } catch (err) {
      if (err.response.status === 401) {
        setError(true)
      }
    }
    reset()
  }
  return (
    <AuthContainer>
      {error ? (
        <div className='error-wrapper'>
          <span>Adresa de email sau parola nu este corecta</span>
        </div>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <Input
                placeholder='namesurname@domain.com'
                type='text'
                icon={<Email />}
                label='Adresa de e-mail'
                important={true}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Controller
            name='password'
            control={control}
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
              />
            )}
          />
        </div>
        <div className='button-wrapper'>
          <button className='auth-register-button-try'>
            Conectează-te
            <ArrowRight />
          </button>
        </div>
        <div className='auth-wrapper'>
          Nu ai un cont?
          <NavLink style={{ marginLeft: '8px' }} className='link' to={PAGES_PATHS.REGISTER}>
            {` ${'Inregistrează-te'}`}
          </NavLink>
        </div>
      </form>
    </AuthContainer>
  )
}
