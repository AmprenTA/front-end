import { SimpleLogo } from 'common/assets/icons/SimpleLogo'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { NavLink, useNavigate } from 'react-router-dom'
import './layout-navbar.scss'
export const Navbar = () => {
  const navigate = useNavigate()
  const navbarLinks = [
    {
      text: 'Statistici',
      path: PAGES_PATHS.STATISTIC,
    },
    {
      text: 'Donatii',
      path: PAGES_PATHS.DONATION,
    },
    {
      text: 'Amprenta mea',
      path: PAGES_PATHS.USER_DASHBOARD,
    },
    {
      text: 'Despre noi',
      path: PAGES_PATHS.HOME,
    },
  ]
  const renderNavbarItems = () => {
    return (
      <ul className='nav-menu'>
        {navbarLinks.map((item, index) => {
          return (
            <NavLink className='link' key={index} to={item.path}>
              {item.text}
            </NavLink>
          )
        })}
      </ul>
    )
  }
  return (
    <LayoutContaier>
      <div className='navbar'>
        <div className='first-container-navbar'>
          <SimpleLogo />
        </div>

        <div className='second-container-navbar'>
          {renderNavbarItems()}
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
    </LayoutContaier>
  )
}
