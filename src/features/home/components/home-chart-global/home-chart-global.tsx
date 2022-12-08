import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './home-chart-local.module.scss'
import React, { useEffect } from 'react'
import AOS from 'aos'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  borderWidth: '4',
  pointRadius: '8',
  backgroundColor: '#ffff',
  plugins: {
    legend: {
      position: 'bottom' as const,
      padding: 55,
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 13,
          family: 'IBM Plex Sans',
        },
      },
    },
  },
}

interface PropsGlobal {
  globalDate: any
  setSearchGlobalDate: (search: any) => void
  searchGlobalDate: any
}
export const HomeChartGlobal: React.FC<PropsGlobal> = ({ ...props }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <LayoutContaier>
      <div className={style.local} data-aos='fade-right'>
        <h2 className={style.local_Title}>Statistici</h2>
        <h3 className={style.local_Details}>
          În baza informațiilor adunate, AmprenTA prezice următoarea evoluție la nivel global:
        </h3>
        <div className={style.local_InputContainer}>
          <input
            className={style.local_Input}
            type='number'
            value={props.searchGlobalDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setSearchGlobalDate(e.target.value)
            }
          />
        </div>

        <Line options={options} data={props.globalDate} />
      </div>
    </LayoutContaier>
  )
}
