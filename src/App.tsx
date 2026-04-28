import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Driver from './pages/Driver'
import Auth from './pages/Auth'
import Partner from './pages/Partner'
import Cars from './pages/Cars'
import Setting from './pages/Setting'
import Payments from './pages/Payments'

function App() {

  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authentification" element={<Auth />} />
          <Route path="/chauffeur" element={<Driver />} />
          <Route path="/voiture" element={<Cars />} />
          <Route path="/partenaire" element={<Partner />} />
          <Route path="/paiement" element={<Payments />} />
          <Route path="/parametres" element={<Setting />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  )
}

export default App
