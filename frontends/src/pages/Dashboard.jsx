import { fetchStats, fetchEnergyAnalytics } from '../api/dashboardService'
import { LineChart } from '../charts';
import { Card, Grid } from '@mui/material'

function Dashboard() {
  const [stats, setStats] = useState([])
  const [energyData, setEnergyData] = useState([])

  useEffect(() => {
    fetchStats().then(setStats)
    fetchEnergyAnalytics().then(setEnergyData)
  }, [])


  useEffect(() => {
    const subscription = subscribeToStats(() => {
      fetchStats().then(setStats)
    })
    return () => subscription.unsubscribe()
  }, [])

  
  return (
    <Grid container spacing={3}>
      {stats.map(stat => (
        <Grid item xs={12} sm={6} md={3} key={stat.id}>
          <Card>
            <Typography variant="h6">{stat.title}</Typography>
            <Typography variant="h4">
              {stat.value} {stat.unit}
            </Typography>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <LineChart data={energyData} />
      </Grid>
    </Grid>
  )
}
