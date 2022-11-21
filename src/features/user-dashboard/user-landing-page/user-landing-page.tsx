import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import React from 'react'
import { Navbar } from 'layout/layout-navbar/layout-navbar'
import { UserRecomandation } from '../user-recomandation/user-recomandation'
import { ChartDate } from '../statistic-chart-date-dashboard/statistic-chart-date'

export const UserDashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ChartDate />
      <UserRecomandation />
      <LayoutFooter />
    </React.Fragment>
  )
}
