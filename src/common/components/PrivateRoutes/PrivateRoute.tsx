import { PAGES_PATHS } from 'common/constants/constant'
import { useNavigate } from 'react-router-dom'

export const PrivateRoute = ({ ...props }) => {
  let navigate = useNavigate()
  const token = localStorage.getItem('token')
  if (!token) {
    return navigate(PAGES_PATHS.LOGIN)
  }
  return {}
}
