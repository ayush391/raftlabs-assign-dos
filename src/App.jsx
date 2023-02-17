
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { useRef } from 'react'
import useScrollSnap from 'react-use-scroll-snap'
import './App.css'
import AddPerson from './components/AddPerson'
import AddRelation from './components/AddRelation'
import FindDOS from './components/FindDOS'
import { AppState } from './context/appState'
import { appTheme } from './theme'

function App() {

  let theme = createTheme(appTheme)
  theme = responsiveFontSizes(theme)

  // const scrollRef = useRef(null)
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 10 })

  return (
    <AppState>
      <ThemeProvider theme={theme}>
        <div
        // ref={scrollRef}
        >
          <CssBaseline />
          <AddPerson />
          <AddRelation />
          <FindDOS />
        </div>
      </ThemeProvider>
    </AppState>
  )
}

export default App
