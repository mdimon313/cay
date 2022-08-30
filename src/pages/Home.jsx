import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { currentUser } = useAuth()

  const navigate = useNavigate()

  // Check for User
  React.useEffect(() => {
    if (currentUser === null) {
      navigate('/login')
    }
  }, [navigate, currentUser])

  return (
    <>
      <ul>
        <li>
          <Link to='/profile'>profile</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
