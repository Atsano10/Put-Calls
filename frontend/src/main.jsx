import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import './styles.css'
import { inject } from '@vercel/analytics';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <App/>
      </AuthProvider>
  </StrictMode>,
)