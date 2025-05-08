import supabase from './supabaseClient'

export const fetchStats = async () => {
  const { data, error } = await supabase
    .from('dashboard_stats')
    .select('*')
  return error ? [] : data
}

export const fetchEnergyAnalytics = async () => {
  const { data } = await supabase
    .from('energy_analytics')
    .select('date,production,consumption')
    .order('date', { ascending: true })
  return data
}


export const subscribeToStats = (callback) => {
    return supabase
      .channel('dashboard-stats')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'dashboard_stats'
      }, callback)
      .subscribe()
  }
  