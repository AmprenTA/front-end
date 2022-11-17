import styles from './statistic-card.module.scss'
export const StatisticCards = () => {
  return (
    <div className={styles.statisticCard_Container}>
      <div className={styles.statisticCard_Card}>
        <span>În medie, o persoană din orașul Suceava produce CO2 în cantitate de:</span>
        <div className={styles.statisticCard_Section}>
          <div>
            <span>Transport</span>
          </div>
        </div>
      </div>
      <div className={styles.statisticCard_Card}>
        <span>Iar o persoană din România produce CO2 în cantitate de:</span>
      </div>
    </div>
  )
}
