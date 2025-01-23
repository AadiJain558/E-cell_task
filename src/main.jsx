import { StrictMode } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageA from './PageA.jsx'
import PageB from './PageB.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageA />} />
        <Route path='/sec' element={<PageB />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
