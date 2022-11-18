import { Cards } from 'common/components/Card/Card'
import { PAGES_PATHS } from 'common/constants/constant'
import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { useNavigate } from 'react-router-dom'
import { ModalSection } from '../modal-section.tsx/modal-section'
import styles from './results.module.scss'
export const Results = () => {
  const navigate = useNavigate()
  return (
    <ModalSection>
      <div className={styles.result_ModalBody}>
        <h1 className={styles.result_Title}>Impactul tău asupra mediului este următorul:</h1>
        <Cards />
        <h3 className={styles.result_RegisterText}>
          Înregistrează-te pentru a-ți salva progresul, pentru a-ți compara rezultatele cu alte
          persoane din zona ta, dar și pentru mai multe predicții și informații.
        </h3>
        <button
          className='button-try'
          onClick={(e) => {
            navigate(PAGES_PATHS.REGISTER)
          }}>
          Înregistrează-te
          <ArrowRight />
        </button>
      </div>
    </ModalSection>
  )
}
