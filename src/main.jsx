import App from '@core/App'
import { StrictMode } from 'react'
import { CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
// import App from './core/App/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
)
