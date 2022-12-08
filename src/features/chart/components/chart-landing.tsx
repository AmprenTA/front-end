/* eslint-disable prettier/prettier */
import api from 'common/api/api'
import { CustomDropdownOptionValue } from 'common/components/DropeDown/DropeDown'
import { HomeChartGlobal } from 'features/home/components/home-chart-global/home-chart-global'
import { HomeChartLocal } from 'features/home/components/home-chart-local/home-chart-local'
import { StatisticCards } from 'features/statistics/components/statistic-card/statistics-card'
import { LayoutContaier } from 'layout/layout-container/layout-container'
import { LayoutFooter } from 'layout/layout-footer/layout-footer'
import { Navbar } from 'layout/layout-navbar/layout-navbar'
import { useEffect, useState } from 'react'

export const ChartLanding = () => {
  const [globalDate, setGlobalDate] = useState([])
  const [countiesOptions, setCountiesOptions] = useState<Array<any>>([])
  const [dropeDownValue, setDropeDownValue] = useState<string>('')
  const [localDate, setLocalDate] = useState({
    transport: 0,
    house: 0,
    food: 0,
  })
  const [searchGlobalDate, setSearchGlobalDate] = useState<number>(100)
  useEffect(() => {
    const fetchFlyes = async () => {
      const response: any = await api.get(`/locations/?county=Suceava`)
      setCountiesOptions(response.data)
    }
    fetchFlyes()
  }, [])
  useEffect(() => {
    const Date = async () => {
      const response: any = await api.get(
        `/statistics/regression_model?total_footprints=${searchGlobalDate}`,
      )
      setGlobalDate(response.data)
    }
    Date()
  }, [searchGlobalDate])
  const countiesDownFlyOptions: Array<CustomDropdownOptionValue> = countiesOptions!.map(
    (location) => ({
      value: location!.id,
      text: location!.name,
    }),
  )
  const locationX = countiesDownFlyOptions.find((item) => item.value === +dropeDownValue)
  useEffect(() => {
    const Date = async () => {
      await api
        .get(`/statistics/average_footprints?location=${locationX?.text}`)
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
  }, [locationX?.text])
  const data = {
    labels: globalDate,
    datasets: [
      {
        label: 'NATIONAL',
        data: globalDate,
        borderColor: '#FF6064',
        backgroundColor: '#FF6064',
        textColor: '#5B5B5B',
      },
    ],
  }
  const localDateObj = {
    labels: ['TRANSPORT', 'ALIMENATIE', 'GOSPODARIE'],
    datasets: [
      {
        data: [localDate.transport, localDate.house, localDate.food],
        backgroundColor: ['#FF6064', '#FCD351', '#509046'],
        borderColor: 'transparent',
      },
    ],
  }
  return (
    <LayoutContaier>
      <Navbar />
      <HomeChartGlobal
        globalDate={data}
        setSearchGlobalDate={setSearchGlobalDate}
        searchGlobalDate={searchGlobalDate}
      />
      <div style={{ marginBottom: '76px' }}>
        <StatisticCards />
      </div>
      <HomeChartLocal
        date={localDateObj}
        optionsDropeDown={countiesDownFlyOptions}
        dropeDownValue={dropeDownValue}
        setDropeDownValue={setDropeDownValue}
      />
      <LayoutFooter />
    </LayoutContaier>
  )
}
