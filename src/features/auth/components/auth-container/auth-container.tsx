import { Logo } from 'common/assets/icons/Logo'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import './auth-container.scss'
export const AuthContainer = ({ ...props }) => {
  return (
    <LayoutContaier>
      <div className='auth'>
        <div className='auth-container'>
          <div className='first-container'>
            <Logo />
            <p className='first-paragraph'>
              Dacă ai continua să trăiesti exact ca acum, pe care planetă ai vreă să te muți?
            </p>
            <p className='second-paragraph'>
              <span>Schimbă-ți amprenta,</span>
              pentru că Pământul e singura opțiune.
            </p>
          </div>
          <div className='second-container'>
            <div style={{ width: '80%' }}>{props.children}</div>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
