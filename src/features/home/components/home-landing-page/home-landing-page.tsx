import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import { Navbar } from 'layout/layout-navbar/layout-navbar'
import React from 'react'
import { AboutUs } from '../home-about-us/home-about-us'

import { HeroSection } from '../home-hero-section/home-hero-section'
import { InfoSection } from '../home-info-section/home-info-section'

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboutUs />
      <LayoutFooter />
    </React.Fragment>
  )
}
