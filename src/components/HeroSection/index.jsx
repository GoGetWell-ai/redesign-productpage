import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ maxWidth: '50%' }}>
          <Typography
            variant="h4"
            sx={{
              color: '#a991ff',
              fontWeight: 'light',
              mb: 1
            }}
          >
            Website Builder
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '2rem',
              mb: 4
            }}
          >
            For Healthcare Facilitators
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: 'white', display: 'inline' }}>
              Create 
            </Typography>
            <Typography variant="h6" sx={{ color: '#a991ff', display: 'inline', ml: 1 }}>
              AI Store
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', display: 'inline', ml: 1 }}>
              in 2 min
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: 'white', display: 'inline' }}>
              Boost Patients Conversion 
            </Typography>
            <Typography variant="h6" sx={{ color: '#a991ff', display: 'inline', ml: 1 }}>
              and Earn While Sleeping
            </Typography>
          </Box>
          
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#6b5acd', 
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': { bgcolor: '#574ab3' }
            }}
          >
            Get Started
          </Button>
        </Box>
        
        <Box
  sx={{ 
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    overflow: 'hidden',
    padding: 0,
    backgroundColor: 'transparent' // Remove the orange background color
  }}
>
  <Box 
    sx={{ 
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: 0 // Remove any border radius
    }}
  >
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=1"
      title="goGetwell.ai Demo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: 0
      }}
    ></iframe>
  </Box>
</Box>

      </Box>
    </Container>
  );
};

export default HeroSection;
