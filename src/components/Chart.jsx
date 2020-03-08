import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import Title from './Title'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
]

export default function Chart({currentProduct}) {
  if (!currentProduct) {
    return null
  }

  return (
    <React.Fragment>
      <Title>Product Graph</Title>
      <ResponsiveContainer>
        <LineChart
          data={currentProduct.data || data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis  />
          <Line type="monotone" dataKey="inventory_level" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  )
}
