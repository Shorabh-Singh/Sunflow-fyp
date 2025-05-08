import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Analytics = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Analytics</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Monthly Production</Typography>
              <Typography variant="body2">Total: 32,000 kWh</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Average Daily Output</Typography>
              <Typography variant="body2">1,060 kWh</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Peak Usage Hour</Typography>
              <Typography variant="body2">2 PM – 3 PM</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;