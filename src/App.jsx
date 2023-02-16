
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import AddPerson from './components/AddPerson'
import AddRelation from './components/AddRelation'
import FindDOS from './components/FindDOS'
import { AppContext } from './context/appContext'
import { AppState } from './context/appState'
import { appTheme } from './theme'

function App() {

  const theme = createTheme(appTheme)

  return (
    <>
      <AppState>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AddPerson />
          <AddRelation />
          <FindDOS />
        </ThemeProvider>
      </AppState>
    </>
  )
}

export default App
