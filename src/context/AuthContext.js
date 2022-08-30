import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const authenticationContext = createContext()

export const useAuth = () => {
  return useContext(authenticationContext)
}

export function Provider({ children }) {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubcribe
  }, [])

  // create account
  async function createAccount(email, password, userName) {
    await createUserWithEmailAndPassword(auth, email, password)

    // update currentname
    await updateProfile(auth.currentUser, {
      displayName: userName,
    })

    const user = auth.currentUser

    setCurrentUser({ ...user })
  }

  const value = {
    currentUser,
    createAccount,
  }
  return (
    <authenticationContext.Provider value={value}>
      {!loading && children}
    </authenticationContext.Provider>
  )
}
