import { Logout } from 'common/assets/icons/Logout'
import { SimpleLogo } from 'common/assets/icons/SimpleLogo'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './layout-navbar.scss'
export const Navbar = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const location = pathname.split('/')[1]

  const navbarLinksAuth = [
    {
      text: 'Amprenta mea',
      path: PAGES_PATHS.STATISTIC,
    },
    {
      text: 'Donatii',
      path: PAGES_PATHS.DONATION,
    },
    {
      text: 'Statistici Generale',
      path: PAGES_PATHS.GENERAL_STATISTIC,
    },
    // {
    //   text: 'Amprenta mea',
    //   path: PAGES_PATHS.USER_DASHBOARD,
    // },
    {
      text: 'Despre noi',
      path: PAGES_PATHS.HOME,
    },
  ]
  const navbarLinks = [
    {
      text: 'Despre noi',
      path: PAGES_PATHS.HOME,
    },
    {
      text: 'Statistici Generale',
      path: PAGES_PATHS.GENERAL_STATISTIC,
    },
    {
      text: 'Donatii',
      path: PAGES_PATHS.DONATION,
    },
  ]
  const navLinks = !token ? navbarLinks : navbarLinksAuth
  const renderNavbarItems = () => {
    return (
      <ul className='nav-menu'>
        {navLinks.map((item, index) => {
          return (
            <NavLink
              style={
                location.toUpperCase() === item.path.slice(1).toUpperCase()
                  ? { borderBottom: '2px solid #5b5b5b' }
                  : {}
              }
              className='link'
              key={index}
              to={item.path}>
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
          {!token ? (
            <button
              className='button-conect'
              onClick={() => {
                navigate(PAGES_PATHS.LOGIN)
              }}>
              Conectează-te
              <ArrowRight />
            </button>
          ) : (
            <div className='auth-user'>
              <div className='profile-image'>
                <img
                  alt='avatar'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkJCZAdC8LXWluGqUg1zStm5JXhnkKgUwvw&usqp=CAU'
                />
              </div>
              <Logout
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  localStorage.removeItem('token')
                  navigate(PAGES_PATHS.LOGIN)
                }}
              />
            </div>
          )}
        </div>
      </div>
    </LayoutContaier>
  )
}
