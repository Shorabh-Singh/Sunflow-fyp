import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Predictions = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Predictions</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tomorrow's Expected Output</Typography>
              <Typography variant="body2">1,180 kWh (Clear sky forecast)</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">7-Day Forecast</Typography>
              <Typography variant="body2">Stable energy production expected.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Predictions;
