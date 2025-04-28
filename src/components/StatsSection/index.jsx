import { Box, Typography, Container } from '@mui/material';

const StatItem = ({ number, text }) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          color: 'white', 
          fontWeight: 'bold',
          display: 'inline'
        }}
      >
        {number}
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ 
          color: '#a991ff', 
          fontWeight: 'bold',
          display: 'inline',
          ml: 1
        }}
      >
        +
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: 'white',
          mt: 1
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const StatsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StatItem number="2100" text="Qualified Doctors" />
        <StatItem number="1000" text="Hospitals" />
        <StatItem number="800" text="AI Treatment Plans" />
      </Box>
    </Container>
  );
};

export default StatsSection;