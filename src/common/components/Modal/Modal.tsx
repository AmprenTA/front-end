import { Close } from 'common/assets/icons/Close'
import { Button } from 'common/components/Button/Button'
import styles from './Modal.module.scss'
interface Props {
  isShowing: boolean
  setShowModal: (show: boolean) => void
  children?: any
}
export const Modal: React.FC<Props> = ({ isShowing, setShowModal, ...props }) => {
  const toggle = () => {
    setShowModal(!isShowing)
  }
  return (
    <>
      {isShowing === true ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalOverlay_Wrapper}>
            <div className={styles.modalOverlay_ModalContainer}>
              <div className={styles.modalOverlay_Header}>
                <Button
                  icon={<Close />}
                  className={styles.modalOverlay_Button}
                  onClick={toggle}></Button>
              </div>
              <div className={styles.modalOverlay_Modal}>{props.children}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
