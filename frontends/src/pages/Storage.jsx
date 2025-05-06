import React from 'react';
import { Typography, Box, Card, CardContent, Grid, LinearProgress } from '@mui/material';

const Storage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Storage Overview</Typography>

      <Grid container spacing={3}>
        {/* Battery 1 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Battery Unit 1</Typography>
              <Typography variant="body2">Charge: 75%</Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mt: 1, height: 10, borderRadius: 5 }} />
            </CardContent>
          </Card>
        </Grid>

        {/* Battery 2 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Battery Unit 2</Typography>
              <Typography variant="body2">Charge: 58%</Typography>
              <LinearProgress variant="determinate" value={58} sx={{ mt: 1, height: 10, borderRadius: 5, backgroundColor: '#ffe0b2' }} />
            </CardContent>
          </Card>
        </Grid>

        {/* Storage Stats */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Storage Capacity</Typography>
              <Typography variant="body2">1500 kWh capacity | 980 kWh currently used</Typography>
              <LinearProgress variant="determinate" value={(980 / 1500) * 100} sx={{ mt: 1, height: 10, borderRadius: 5 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Storage;
