import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/mealplan">Meal Plan</Link>
        <Link to="/grocerylist">Grocery List</Link>
        <Link onClick={handleLogout} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
