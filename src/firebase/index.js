import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore' // for the db import 'firebase/compat/auth';
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyAf_DyIch0stnkaYuemkPxqYIdd4v45uNc",
  authDomain: "jagger-shop.firebaseapp.com",
  projectId: "jagger-shop",
  storageBucket: "jagger-shop.appspot.com",
  messagingSenderId: "697307671287",
  appId: "1:697307671287:web:9ef5b7b0cfc0a23f6281f2"
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const auth = firebase.auth()
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }

const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`)
const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export { firestore, createUserProfileDocument, auth }
