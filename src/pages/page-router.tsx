import { Routes, Route } from 'react-router-dom'
import { PAGES_PATHS } from 'common/constants/constant'
import { Home } from 'features/home/components/home-landing-page/home-landing-page'
import { AuthRegister } from 'features/auth/components/auth-register/auth-register'
import { Login } from 'features/auth/components/auth-login/auth-login'
import { TransportSection } from 'features/quiz-sections/components/transport-section/transport-section'
import { HouseHoldSection } from 'features/quiz-sections/components/household-section/household-section'
import { FoodSection } from 'features/quiz-sections/components/food-section/food-section'
import { StatisticLanding } from 'features/statistics/components/statistic-landing/statistic-landing'
import { Results } from 'features/quiz-sections/components/results/results'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={PAGES_PATHS.HOME} element={<Home />} />
      <Route path={PAGES_PATHS.REGISTER} element={<AuthRegister />} />
      <Route path={PAGES_PATHS.LOGIN} element={<Login />} />
      <Route path={PAGES_PATHS.TRANSPORT_SECTION} element={<TransportSection />} />
      <Route path={PAGES_PATHS.HOUSEHOLD_SECTION} element={<HouseHoldSection />} />
      <Route path={PAGES_PATHS.FOOD_SECTION} element={<FoodSection />} />
      <Route path={PAGES_PATHS.STATISTIC} element={<StatisticLanding />} />
      <Route path={PAGES_PATHS.RESULT} element={<Results />} />
    </Routes>
  )
}
