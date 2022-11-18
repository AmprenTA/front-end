import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import { Navbar } from 'layout/layout-navbar/layout-navbar'
import React from 'react'
import { AboutUs } from '../home-about-us/home-about-us'
import { HomeChartDate } from '../home-chart-date/home-chart-date'
import { HomeChart } from '../home-chart-local/home-chart-local'
import { HeroSection } from '../home-hero-section/home-hero-section'
import { InfoSection } from '../home-info-section/home-info-section'

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <HomeChart />
      <HomeChartDate />
      <AboutUs />
      <LayoutFooter />
    </React.Fragment>
  )
}
