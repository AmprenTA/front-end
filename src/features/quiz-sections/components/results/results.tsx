import api from 'common/api/api'
import { Cards } from 'common/components/Card/Card'
// import { PAGES_PATHS } from 'common/constants/constant'
// import { ArrowRight } from 'features/home/assests/icons/ArrowRight'
import { Result } from 'features/quiz-sections/models/transport-models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ModalSection } from '../modal-section.tsx/modal-section'
import styles from './results.module.scss'
export const Results = () => {
  // const navigate = useNavigate()
  const { id } = useParams()
  const [result, setResult] = useState<Result>({
    transportation_carbon_footprint: 0,
    house_carbon_footprint: 0,
    food_carbon_footprint: {
      average: 0,
      min: 0,
      max: 0,
    },
  })
  useEffect(() => {
    api.get(`footprints/${id}`).then((res) => {
      setResult({
        food_carbon_footprint: res.data.food_carbon_footprint,
        house_carbon_footprint: res.data.house_carbon_footprint,
        transportation_carbon_footprint: res.data.transportation_carbon_footprint,
      })
    })
  }, [id])
  const token = localStorage.getItem('token')
  return (
    <ModalSection>
      <div className={styles.result_ModalBody}>
        <h1 className={styles.result_Title}>Impactul tău asupra mediului este următorul:</h1>
        <Cards
          min={Math.round(result.food_carbon_footprint.min)}
          max={Math.round(result.food_carbon_footprint.max)}
          alimentatie={Math.round(result.food_carbon_footprint.average)}
          transport={Math.round(result.transportation_carbon_footprint)}
          gospodarie={Math.round(result.house_carbon_footprint)}
        />
        {token ? (
          ''
        ) : (
          <>
            {' '}
            <h3 className={styles.result_RegisterText}>
              Înregistrează-te pentru a-ți salva progresul, pentru a-ți compara rezultatele cu alte
              persoane din zona ta, dar și pentru mai multe predicții și informații.
            </h3>
            {/* <button
              className='button-try'
              onClick={(e) => {
                navigate(PAGES_PATHS.REGISTER)
              }}>
              Înregistrează-te
              <ArrowRight />
            </button> */}
          </>
        )}
      </div>
    </ModalSection>
  )
}
