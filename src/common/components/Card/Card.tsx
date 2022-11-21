import styles from './Card.module.scss'
interface Props {
  alimentatie?: number
  transport?: number
  gospodarie?: number
}
export const Cards: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={styles.Card_Container}>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Transport</span>
            <div style={{ background: '#F78E91' }} className={styles.Card_Circle}>
              <span style={{ color: 'white' }}>{props.transport} kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Alimentație</span>
            <div style={{ background: '#FCD351' }} className={styles.Card_Circle}>
              <span style={{ color: '#222212' }}>{props.alimentatie} kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Card_Card}>
        <div className={styles.Card_Section}>
          <div className={styles.Card_CircleSection}>
            <span style={{ marginBottom: '12px' }}>Gospodărie</span>
            <div style={{ background: '#509046' }} className={styles.Card_Circle}>
              <span style={{ color: 'white' }}>{props.gospodarie} kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
