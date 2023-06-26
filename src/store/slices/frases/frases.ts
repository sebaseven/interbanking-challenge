import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IFrase } from '../../../interfaces/frase-interface';

// Define a type for the slice state


// Define the initial state using that type
const initialState: IFrase[] = []

export const frasesSlice = createSlice({
  name: 'frases',
  initialState,
  reducers: {
    // ventaja de usar Immer es que se puede mutar el estado directamente
    agregarFrase: (state, action: PayloadAction<IFrase>) => {
      state.push(action.payload)
    },
  },
})

export const { agregarFrase } = frasesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFrases = (state: RootState) => state.phrasesState

export default frasesSlice.reducer