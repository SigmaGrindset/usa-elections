import { useNavigate } from '@tanstack/react-router'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { EvTrendPoint } from '#/types'

interface EvTrendChartProps {
  data: EvTrendPoint[]
}

const LINE_COLOR = '#c9a961'
const AXIS_COLOR = '#8a8780'

const ChartTooltip = ({ active, payload }: any) => {
  if (!active || !payload || payload.length === 0) return null
  const d: EvTrendPoint = payload[0].payload
  return (
    <div className="bg-primary border border-white/15 px-3 py-2 text-xs rounded-sm shadow-xl">
      <div className="font-playfair text-base font-bold text-white">{d.year}</div>
      <div className="text-muted mt-1">
        Margin: <span className="text-accent font-medium">{d.diff} EV</span>
      </div>
      <div className="text-muted/70 text-[0.7rem]">
        {d.winner_ev} – {d.runner_up_ev}
      </div>
    </div>
  )
}

export const EvTrendChart = ({ data }: EvTrendChartProps) => {
  const navigate = useNavigate()

  const handleClick = (state: any) => {
    const point = state?.activePayload?.[0]?.payload as EvTrendPoint | undefined
    if (point) navigate({ to: '/election/$year', params: { year: String(point.year) } })
  }

  return (
    <div className="w-full" style={{ height: 380 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 24, bottom: 12, left: 0 }}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <CartesianGrid stroke="#ffffff" strokeOpacity={0.06} vertical={false} />
          <XAxis
            dataKey="year"
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 11 }}
            tickLine={{ stroke: '#ffffff', strokeOpacity: 0.15 }}
            axisLine={{ stroke: '#ffffff', strokeOpacity: 0.15 }}
          />
          <YAxis
            stroke={AXIS_COLOR}
            tick={{ fill: AXIS_COLOR, fontSize: 11 }}
            tickLine={{ stroke: '#ffffff', strokeOpacity: 0.15 }}
            axisLine={{ stroke: '#ffffff', strokeOpacity: 0.15 }}
            label={{
              value: 'EV MARGIN',
              angle: -90,
              position: 'insideLeft',
              offset: 15,
              style: { fill: AXIS_COLOR, fontSize: 10, letterSpacing: '0.15em' },
            }}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#ffffff', strokeOpacity: 0.25, strokeDasharray: '3 3' }} />
          <Line
            type="monotone"
            dataKey="diff"
            stroke={LINE_COLOR}
            strokeWidth={1.75}
            dot={{ r: 3, fill: LINE_COLOR, stroke: LINE_COLOR }}
            activeDot={{ r: 5, fill: LINE_COLOR, stroke: '#0a0a0f', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
