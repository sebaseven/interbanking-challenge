import Box from '@mui/material/Box';
import Content from './content/Content';
import Header from './header/Header';
import Copyright from './footer/Copyright';

const PhrasesBase = () => {
  return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header  />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
  );
}
export default PhrasesBase;