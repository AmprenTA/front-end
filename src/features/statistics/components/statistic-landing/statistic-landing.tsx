import { Navbar } from 'layout/layout-navbar/layout-navbar'
import { StatisticCards } from '../statistic-card/statistics-card'
import { ChartDate } from '../statistic-chart-date/statistic-chart-date'
import { LocalChart } from '../statistici-chart-local/statistici-chart-local'
import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import React from 'react'
import { UserRecomandation } from 'features/user-dashboard/user-recomandation/user-recomandation'
export const StatisticLanding = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LocalChart />
      <StatisticCards />
      <ChartDate />
      <UserRecomandation />
      <LayoutFooter />
    </React.Fragment>
  )
}
