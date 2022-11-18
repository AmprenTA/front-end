import styles from './Card.module.scss'
export const Cards = () => {
  return (
    <div className={styles.Card_Container}>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Transport</span>
            <div style={{ background: '#F78E91' }} className={styles.Card_Circle}>
              <span style={{ color: 'white' }}>10kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Alimentație</span>
            <div style={{ background: '#FCD351' }} className={styles.Card_Circle}>
              <span style={{ color: '#222212' }}>8kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Gospodărie</span>
            <div style={{ background: '#509046' }} className={styles.Card_Circle}>
              <span style={{ color: 'white' }}>12kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
