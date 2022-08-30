import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Illustration from '../component/Illustration'
import InputText from '../component/InputText'
import Lable from '../component/Lable'
// import { useAuth } from "../context/AuthContext";

function Login() {
  window.document.title = 'Login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  // const { signin, currentUser } = useAuth();
  const navigate = useNavigate()
  // console.log(currentUser);

  async function handleLogin(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      // await signin(email, password);
      navigate('/profile')
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError('Faild to login! Invalid password')
    }
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='h-screen grid place-items-center grid-cols-1 md:grid-cols-2'>
        <Illustration src='./img/signin.jpg' alt='signup' />

        <form className='w-full' onSubmit={handleLogin}>
          <h2 className='text-center uppercase font-bold text-2xl'>
            Log in your account
          </h2>

          {/* error message */}
          {error && (
            <p className='bg-red-200 py-3 mt-4 text-center rounded-md'>
              {/* password do not match! */} {error}
            </p>
          )}
          {/* error message end*/}

          <div className='my-3'>
            <Lable title={'Email'} />
            <InputText
              type={'email'}
              placeholder='Email...'
              id='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='my-3'>
            <Lable title={'Password'} />
            <InputText
              type={'password'}
              placeholder='Password...'
              id='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className='text-gray-500 my-2 cursor-pointer inline-block hover:text-blue-400 hover:underline'>
            forget password
          </p>

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-green-400 hover:bg-green-500 transition-all select-none py-2 rounded-md text-xl text-white focus:outline-none'
          >
            Sign up
          </button>

          <p className='text-center text-gray-400 mt-5'>
            you don't have account?
            <Link to='/signup' className='text-blue-500'>
              signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Login)
