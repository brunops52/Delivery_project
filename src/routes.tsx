import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pizzaria from './pages/Pizzaria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Pizzaria />} />
  </Routes>
)
export default Rotas
