import './chart.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function Chart({ title, data, xDataKey, yDataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart data={data} width={730} height={250}>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <XAxis dataKey={xDataKey} stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yDataKey} fill="#8884d8" />
          {/* <Line type="monotone" dataKey={dataKey} stroke="#5550bd" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
