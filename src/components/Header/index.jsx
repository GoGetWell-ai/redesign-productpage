import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', py: 2 , height : '80px'}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}>
            <span style={{ color: 'white' }}>go</span>
            <span style={{ color: 'white' }}>Getwell</span>
            <span style={{ color: '#a991ff' }}>.ai</span>
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ color: 'white' }}>About Us</Button>
            <Button color="inherit" sx={{ color: 'white' }}>FAQ</Button>
            <Button color="inherit" sx={{ color: 'white' }}>Contact Us</Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'white', 
                color: '#070622',
                '&:hover': { bgcolor: '#f0f0f0' }
              }}
            >
              Login
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#6b5acd', 
                color: 'white',
                '&:hover': { bgcolor: '#574ab3' }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

     
      <Box sx={{ height: '1.3px', background: '#9999' }} />
    </>
  );
};

export default Header;
