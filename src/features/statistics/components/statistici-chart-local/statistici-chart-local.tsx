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
import style from './statistic-chart-local.module.scss'
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
  labels: ['0', '200', '400', '600'],
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

export function LocalChart() {
  return (
    <LayoutContaier>
      <div className={style.local}>
        <h2 className={style.local_Title}>Statistici</h2>
        <h3 className={style.local_Details}>
          În baza informațiilor adunate, AmprenTA prezice următoarea evoluție la nivelul local:
        </h3>
        <Line options={options} data={data} />
      </div>
    </LayoutContaier>
  )
}
