import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
