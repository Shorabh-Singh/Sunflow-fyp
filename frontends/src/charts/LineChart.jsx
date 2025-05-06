import { LineChart } from '@mui/x-charts/LineChart';

export default function SolarLineChart({ data }) {
  return (
    <LineChart
      xAxis={[{ data: data.map(item => new Date(item.date)), scaleType: 'time' }]}
      series={[
        { 
          data: data.map(item => item.production),
          label: 'Production',
          color: '#2E7D32',
        },
        { 
          data: data.map(item => item.consumption),
          label: 'Consumption',
          color: '#FF8F00',
        }
      ]}
      width={800}
      height={400}
    />
  );
}
