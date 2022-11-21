import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import { Navbar } from 'layout/layout-navbar/layout-navbar'
import React from 'react'
import { DonationCard } from '../donation-card/donation-card'

export const Donation = () => {
  return (
    <React.Fragment>
      <Navbar />
      <DonationCard />
      <LayoutFooter />
    </React.Fragment>
  )
}
