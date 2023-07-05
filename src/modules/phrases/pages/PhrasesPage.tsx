import {Container,Box} from '@mui/material';
import { Content } from '../components/content/Content';
import Header from '../components/header/Header';
import Copyright from '../components/footer/Copyright';

export const PhrasesPage = () => {
  return (
    <Container maxWidth={false}>
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
    </Container>
  );
}
