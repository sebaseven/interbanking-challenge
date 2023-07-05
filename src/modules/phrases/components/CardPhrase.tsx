
import {Box}  from '@mui/material';
import { CardPhraseProps } from '~/interfaces/card-interface';

const CardPhrase : React.FC<CardPhraseProps>  = (props) => {
    const { texto } = props;
    return (
        <Box sx={{
            boxShadow: 3,
            width: '8rem',
            height: '5rem',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}>
       {texto.phrase}
        </Box>
      );
}
export default CardPhrase;