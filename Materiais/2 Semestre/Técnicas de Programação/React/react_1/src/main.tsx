import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Componente from './Componente.tsx'
import Classe from './Classe.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Componente valor='Meu valor na propriedade'/>
    <Componente valor='Meu valor na propriedade'/>
    <Componente valor='Meu valor na propriedade'/>
    <Classe mensagem='Treine todos os dias'></Classe>
  </StrictMode>,
)
