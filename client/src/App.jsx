import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Register from './pages/Register'
import Nav from './components/Nav'
import SignIn from './pages/Signin'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
