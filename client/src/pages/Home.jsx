import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/register')}>Click Here To Begin</button>
    </div>
  )
}

export default Home
