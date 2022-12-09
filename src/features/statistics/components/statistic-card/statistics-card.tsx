import Aos from 'aos'
import api from 'common/api/api'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect, useState } from 'react'
import styles from './statistic-card.module.scss'
export const StatisticCards = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [romania, setRomania] = useState({
    transport: 0,
    house: 0,
    food: 0,
  })
  const [suceava, setSuceava] = useState({
    transport: 0,
    house: 0,
    food: 0,
  })
  useEffect(() => {
    const Date = async () => {
      await api
        .get(`/statistics/average_footprints`)
        .then((response) => {
          setRomania({
            transport: response.data.transportation_carbon_footprint,
            house: response.data.house_carbon_footprint,
            food: response.data.food_carbon_footprint.average,
          })
        })
        .catch((error: any) => {
          setRomania({
            transport: 0,
            house: 0,
            food: 0,
          })
        })
    }
    Date()
  }, [])
  useEffect(() => {
    const Date = async () => {
      await api
        .get(`/statistics/average_footprints?location=Suceava%2C%20Suceava`)
        .then((response) => {
          setSuceava({
            transport: response.data.transportation_carbon_footprint,
            house: response.data.house_carbon_footprint,
            food: response.data.food_carbon_footprint.average,
          })
        })
        .catch((error: any) => {
          setSuceava({
            transport: 0,
            house: 0,
            food: 0,
          })
        })
    }
    Date()
  }, [])
  return (
    <LayoutContaier>
      <div className={styles.statisticCard_Container} data-aos='fade-right'>
        <div className={styles.statisticCard_Card}>
          <p>În medie, o persoană din orașul Suceava produce CO2 în cantitate de:</p>
          <div className={styles.statisticCard_Section}>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Transport</span>
              <div style={{ background: '#F78E91' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>{Math.round(suceava.transport)} kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Alimentație</span>
              <div style={{ background: '#FCD351' }} className={styles.statisticCard_Circle}>
                <span style={{ color: '#222212' }}>{Math.round(suceava.house)} kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Gospodărie</span>
              <div style={{ background: '#509046' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>{Math.round(suceava.food)} kg</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statisticCard_Card}>
          <p>Iar o persoană din România produce CO2 în cantitate de:</p>
          <div className={styles.statisticCard_Section}>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Transport</span>
              <div style={{ background: '#F78E91' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>{Math.round(romania.transport)} kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Alimentație</span>
              <div style={{ background: '#FCD351' }} className={styles.statisticCard_Circle}>
                <span style={{ color: '#222212' }}>{Math.round(romania.house)} kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Gospodărie</span>
              <div style={{ background: '#509046' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>{Math.round(romania.food)} kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
