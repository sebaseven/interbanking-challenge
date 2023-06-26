import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp  from './JournalApp'
import './styles/styles.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import PhrasesScreen from './MyPhrasesApp/PhrasesBase'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
    <ThemeProvider theme={theme}>
    {/* <JournalApp /> */}
    <PhrasesScreen />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

