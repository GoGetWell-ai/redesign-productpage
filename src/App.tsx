import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import HyperspeedBackground from '@/components/HyperspeedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';



// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    background: {
      default: 'transparent',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HyperspeedBackground darkMode={true} />
      <Header />
      <HeroSection />
      <StatsSection />
    </ThemeProvider>
  );
}

export default App;