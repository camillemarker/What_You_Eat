import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/grocerylist">Grocery List</Link>
        <Link to="/newrecipe">Create Recipe</Link>
        <Link to="/savedrecipes">Saved Recipes</Link>
        <Link onClick={handleLogout} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/register">Register</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  )

  return <header>{user ? userOptions : publicOptions}</header>
}

export default Nav
