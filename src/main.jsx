import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Counter.css'
import Result from './Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Result />
  </StrictMode>,
)
