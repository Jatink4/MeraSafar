import { Route, Routes } from "react-router-dom"
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSign'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSign'
import Home from './pages/Home'


function App() {
 

  return (
    <div>
      <Routes>
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
