import Aos from 'aos'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { DropeDown } from 'common/components/DropeDown/DropeDown'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import style from './home-chart-date.module.scss'
ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  date: any
  optionsDropeDown: Array<any>
  dropeDownValue: any
  setDropeDownValue: (drope: any) => void
}
export const HomeChartLocal: React.FC<Props> = ({ date, optionsDropeDown, ...props }) => {
  const image = require('../../../../common/assets/Footprint.png')
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
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
  const handleChangeDropeDownCounties = (event: any) => {
    props.setDropeDownValue(+event.target.value)
  }
  return (
    <LayoutContaier>
      <div className={style.dateChart} data-aos='fade-left'>
        <div className={style.dateChart_Header}>
          <div>
            <img alt='footprint' src={image} />
          </div>
          <div className={style.dateChart_DropeDownContainer}>
            <div className={style.dateChart_Details}>Amprenta la nivel Local</div>
            <div>
              {' '}
              <DropeDown
                placeholder={''}
                options={optionsDropeDown}
                onChange={handleChangeDropeDownCounties}
                value={props.dropeDownValue}
              />
            </div>
          </div>
        </div>
        <div>
          <Pie width={400} height={400} options={options} data={date} />
        </div>
      </div>
    </LayoutContaier>
  )
}
