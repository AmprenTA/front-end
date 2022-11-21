import { Facebook } from 'common/assets/icons/Facebook'
import { Instagram } from 'common/assets/icons/Instagram'
import { Logo } from 'common/assets/icons/Logo'

import './layout-footer.scss'
export const LayoutFooter = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo'>
          <Logo width='200' />
        </div>
        <span className='footer-text'>
          Proiectul Amprenta este parte a concursului intern BIM organizat de ASSIST Software SRL
        </span>
        <div className='footer-social-icon'>
          <Instagram />
          <Facebook />
        </div>
      </div>
    </footer>
  )
}
