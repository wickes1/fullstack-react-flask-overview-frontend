import React, { useContext } from 'react'
import Chart from '../../components/chart/Chart'
import './charts.css'
import { Context } from './../../store/appContext'

export default function Charts() {
  const { store, actions } = useContext(Context)
  return (
    <div className="charts">
      <Chart
        title="Avg. EUI By Property Type"
        grid
        data={store.sqlQueryData}
        xDataKey="type"
        yDataKey="avg(eui)"
      />
    </div>
  )
}
