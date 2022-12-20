import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAoI7SpnAI5kIB44cl0twiMU_wahFE8PAg',
  authDomain: 'porfolio-11cd9.firebaseapp.com',
  projectId: 'porfolio-11cd9',
  storageBucket: 'porfolio-11cd9.appspot.com',
  messagingSenderId: '114284663956',
  appId: '1:114284663956:web:79100d8172520fb6769081',
  measurementId: 'G-47EF6KL903',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
