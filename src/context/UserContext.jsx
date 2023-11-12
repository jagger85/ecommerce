import React from 'react'
import { useEffect, createContext, useState } from 'react'
import { auth, createUserProfileDocument } from '../firebase/index'
import Spinner from '../components/spinner/Spinner'
export const UserContext = createContext()

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth)

        useRef.onSnapshot((snapshot) => {
          setUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
          setLoading(false)
        })
      } else {
        setUser(userAuth)
        setLoading(false)
      }
    })
    return () => unsubscribeFormAuth()
  },[])

  const userContext = { user, loading }
  if( loading ){return <Spinner/>}
  return (
    <UserContext.Provider value={userContext}>
      {
      children
      }
    </UserContext.Provider>
  )
}

export default UserContextProvider