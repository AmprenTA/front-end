import { SimpleLogo } from 'common/assets/icons/SimpleLogo'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { NavLink, useNavigate } from 'react-router-dom'
import './layout-navbar.scss'
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <LayoutContaier>
      <div className='navbar'>
        <div className='logo-container'>
          <SimpleLogo />
        </div>
        <div className='nav-links'>
          <h3 className='link'>Despre noi</h3>
          <NavLink className='link' to={PAGES_PATHS.STATISTIC}>
            Statistici
          </NavLink>
          <div>
            <button
              className='button-try'
              onClick={() => {
                navigate(PAGES_PATHS.LOGIN)
              }}>
              Conectează-te
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
