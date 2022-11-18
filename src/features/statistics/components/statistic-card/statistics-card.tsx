import { LayoutContaier } from 'layout/layout-container/layout-container'
import styles from './statistic-card.module.scss'
export const StatisticCards = () => {
  return (
    <LayoutContaier>
      {' '}
      <div className={styles.statisticCard_Container}>
        <div className={styles.statisticCard_Card}>
          <p>În medie, o persoană din orașul Suceava produce CO2 în cantitate de:</p>
          <div className={styles.statisticCard_Section}>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Transport</span>
              <div style={{ background: '#F78E91' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>10kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Alimentație</span>
              <div style={{ background: '#FCD351' }} className={styles.statisticCard_Circle}>
                <span style={{ color: '#222212' }}>8kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Gospodărie</span>
              <div style={{ background: '#509046' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>12kg</span>
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
                <span style={{ color: 'white' }}>10kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Alimentație</span>
              <div style={{ background: '#FCD351' }} className={styles.statisticCard_Circle}>
                <span style={{ color: '#222212' }}>8kg</span>
              </div>
            </div>
            <div className={styles.statisticCard_CircleSection}>
              <span style={{ marginBottom: '12px' }}>Gospodărie</span>
              <div style={{ background: '#509046' }} className={styles.statisticCard_Circle}>
                <span style={{ color: 'white' }}>12kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutContaier>
  )
}
