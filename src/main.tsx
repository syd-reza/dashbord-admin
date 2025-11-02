import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import theme from './theme.ts'
import { ThemeProvider } from '@mui/material'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store, presistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Header from './Components/Header.tsx'
import Footer from './Components/Footer.tsx'
import { BrowserRouter } from "react-router-dom"
import AuthRoute from './Components/AuthRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={presistor}>
          <BrowserRouter>
            <AuthRoute>
              <Header />
              <App />
              <Footer />
            </AuthRoute>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
