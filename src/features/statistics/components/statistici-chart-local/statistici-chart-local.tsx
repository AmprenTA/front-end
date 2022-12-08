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
  labels: ['07.09.2022', '07.10.2022', '07.11.2022', '08.12.2022'],
  datasets: [
    {
      label: 'CALATORII',
      data: [100.26, 250.5, 557.1, 568.568],
      borderColor: '#F78E91',
      backgroundColor: '#F78E91',
      textColor: '#5B5B5B',
    },
    {
      label: 'GOSPODARIE',
      data: [82.3, 69.7, 77.9, 73.72],
      borderColor: '#509046',
      backgroundColor: '#509046',
      textColor: '#5B5B5B',
    },
    {
      label: 'ALIMENATIE',
      data: [288.2, 300.1, 312.6, 303.76],
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
          În baza informațiilor adunate, AmprenTA ta a avut urmatoarea evolutie:
        </h3>
        <Line options={options} data={data} />
      </div>
    </LayoutContaier>
  )
}
