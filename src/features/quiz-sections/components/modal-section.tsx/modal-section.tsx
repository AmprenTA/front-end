import { Close } from 'common/assets/icons/Close'
import { PAGES_PATHS } from 'common/constants/constant'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import styles from './modal-section.module.scss'

export const ModalSection = ({ ...props }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.modalSection}>
      <div className={styles.modalSection_ModalOverlay}>
        <div className={styles.modalSection_InnerContainer}>
          <div className={styles.modalSection_Modal}>
            <div className={styles.modalSection_ModalHeder}>
              <Button
                onClick={() => navigate(PAGES_PATHS.HOME)}
                icon={<Close />}
                className={styles.modalSection_Button}></Button>
            </div>

            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
