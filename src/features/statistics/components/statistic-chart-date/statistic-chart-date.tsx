import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import style from './statistic-chart-date.module.scss'
import { useEffect, useState } from 'react'
import api from 'common/api/api'
import Aos from 'aos'
ChartJS.register(ArcElement, Tooltip, Legend)
const options = {
  responsive: true,
  borderWidth: '4',
  pointRadius: '8',
  backgroundColor: '#ffff',
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
}
export function ChartDate() {
  const image = require('../../../../common/assets/Footprint.png')
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [localDate, setLocalDate] = useState({
    transport: 0,
    house: 0,
    food: 0,
  })
  useEffect(() => {
    const Date = async () => {
      await api
        .get(`footprints/13`)
        .then((response) => {
          setLocalDate({
            transport: response.data.transportation_carbon_footprint,
            house: response.data.house_carbon_footprint,
            food: response.data.food_carbon_footprint.average,
          })
        })
        .catch((error: any) => {
          setLocalDate({
            transport: 0,
            house: 0,
            food: 0,
          })
        })
    }
    Date()
  }, [])
  const data = {
    labels: ['TRANSPORT', 'ALIMENATIE', 'GOSPODARIE'],

    datasets: [
      {
        data: [localDate.transport, localDate.food, localDate.house],

        backgroundColor: ['#FF6064', '#FCD351', '#509046'],
        borderColor: 'transparent',
      },
    ],
  }
  return (
    <LayoutContaier>
      <div className={style.dateChart} data-aos='fade-left'>
        <div className={style.dateChart_Header}>
          <div>
            <img alt='footprint' src={image} />
          </div>
          <h3 className={style.dateChart_Details}>
            AmprentaTa a scăzut cu un total de 15 kg de CO2 față de luna trecută.
          </h3>
        </div>
        <div>
          {' '}
          <Pie width={400} height={400} options={options} data={data} />
        </div>
      </div>
    </LayoutContaier>
  )
}
