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
import style from './statistic-chart-date.module.scss'
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

export const data = {
  labels: ['07.09.2022', '07.10.2022', '07.11.2022', '08.12.2022'],
  datasets: [
    {
      label: 'CALATORII',
      data: [12, 19, 3, 5],
      borderColor: '#F78E91',
      backgroundColor: '#F78E91',
      textColor: '#5B5B5B',
    },
    {
      label: 'GOSPODARIE',
      data: [0, 5, 13, 8],
      borderColor: '#509046',
      backgroundColor: '#509046',
      textColor: '#5B5B5B',
    },
    {
      label: 'ALIMENATIE',
      data: [0, 8, 10, 20],
      borderColor: '#FCD351',
      backgroundColor: '#FCD351',
      textColor: '#5B5B5B',
    },
  ],
}

export function ChartDate() {
  const image = require('../../../../common/assets/Footprint.png')
  return (
    <LayoutContaier>
      <div className={style.dateChart}>
        <div className={style.dateChart_Header}>
          <div>
            <img alt='footprint' src={image} />
          </div>
          <h3 className={style.dateChart_Details}>
            AmprentaTa a scăzut cu un total de 15 kg de CO2 față de luna trecută.
          </h3>
        </div>
        <Line options={options} data={data} />
      </div>
    </LayoutContaier>
  )
}
