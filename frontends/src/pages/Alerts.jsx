import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Alerts = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Alerts</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: '6px solid #f44336' }}>
            <CardContent>
              <Typography variant="h6">Battery Overload</Typography>
              <Typography variant="body2">Detected at 10:45 AM - Urgent attention required.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: '6px solid #ff9800' }}>
            <CardContent>
              <Typography variant="h6">Weather Sensor Unstable</Typography>
              <Typography variant="body2">Intermittent connectivity reported.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Alerts;
