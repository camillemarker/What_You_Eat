import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'
import Home from './pages/Home'
import Register from './pages/Register'
import Nav from './components/Nav'
import SignIn from './pages/Signin'
import Recipes from './pages/Recipes'
import GroceryList from './pages/GroceryList'
import MealPlan from './pages/MealPlan'
import About from './pages/About'
import NewRecipe from './pages/NewRecipe'
import SavedRecipes from './pages/SavedRecipes'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/mealplan" element={<MealPlan />} />
          <Route path="/grocerylist" element={<GroceryList user={user} />} />
          <Route path="/newrecipe" element={<NewRecipe />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
