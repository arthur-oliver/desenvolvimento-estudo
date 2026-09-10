import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Componente from './Componente.tsx'
import Botao from './Botao.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Componente />
    <Botao />
  </StrictMode>,
)
