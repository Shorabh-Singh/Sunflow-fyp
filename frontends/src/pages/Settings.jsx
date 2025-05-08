import React from 'react';
import { Typography, Box, Card, CardContent, Grid, TextField, Button } from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Settings</Typography>

      <Card sx={{ maxWidth: 500, marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Update System Thresholds</Typography>

          <TextField
            label="Max Battery Load (%)"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue="85"
          />
          <TextField
            label="Alert Notification Email"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue="admin@sunflow.com"
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
