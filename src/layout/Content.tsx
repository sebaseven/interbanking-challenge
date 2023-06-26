import React, { useState } from 'react';
import { AddCircleRounded, Search as SearchIcon } from '@mui/icons-material';
import {AppBar,Toolbar,Paper,Grid,Button,TextField,} from '@mui/material';
import PhraseModalInput from '../MyPhrasesApp/PhraseModalInput';
import { useAppDispatch, useAppSelector } from '../hooks/useCustomState';
import { agregarFrase } from '../store/slices/frases/frases'
import { RootState } from '~/store';
import CardPhrase from '../MyPhrasesApp/CardPhrase';
import { IFrase } from '../interfaces/frase-interface';

 const Content = () => {
  const [openModalPhrase, setOpenModaPhrase] = useState<boolean>(false);
  const phrasesState = useAppSelector((state: RootState) => state.phrasesState)


  const [texto, setTexto] = useState<string>('')
  const [busqueda, setBusqueda] = useState<string>('')

  const phrasesFiltered = phrasesState.filter((frase:IFrase) => frase.phrase.includes(busqueda)) 


  const dispatch = useAppDispatch()
  const openModal = () => {
    setOpenModaPhrase(true);
  }
  const handleInsert = () => {
    if (texto === '') {
      return
    }
   dispatch(agregarFrase({phrase:texto}))
   setOpenModaPhrase(false)
  }
  const handleClose = () => {
    setOpenModaPhrase(false)
  }
  const validateInput  = () => {
    if (texto === '') {
      return true
    }
    return false
  }
  return (
    <Paper >
      <PhraseModalInput required={true} errorText={validateInput() ? 'Obligatorio' : ''} error={validateInput()} open={openModalPhrase} setTexto={setTexto} handleClose={handleClose} handleInsert={handleInsert}/>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Search by text"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button onClick={openModal} endIcon={<AddCircleRounded />} variant="contained" sx={{ mr: 1 }}>
                Add phrase
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container>
      {
        //No es buena practica usar el index como key (usar idPhrase), solo es para el ejemplo (luego usar id persistido en DB)
        phrasesFiltered.map((frase,i) => {
          return <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <CardPhrase texto={frase} />
          </Grid>
        })
      } 
      </Grid>
    </Paper>
  );
}
export default Content;