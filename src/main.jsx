import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import  theme  from './styles/theme'
import  GlobalStyle  from './styles/global'
import { AuthProvider } from './hooks/auth'
import { StatesProvider } from './hooks/states'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <AuthProvider>
          <StatesProvider>
          <Routes />
          </StatesProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
