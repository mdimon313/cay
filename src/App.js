import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectRoute from './component/ProtectRoute'
import AccountInfo from './pages/AccountInfo'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/*' element={<ProtectRoute />}>
        <Route path='chat' element={<Home />} />
        <Route path='profile' element={<AccountInfo />} />
      </Route>
    </Routes>
  )
}

export default App
