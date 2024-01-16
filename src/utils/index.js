// import {initializeApp} from 'firebase/app'
// import {getDatabase} from 'firebase/database'
// import { firebaseConfig } from '../constant/firebaseConfig'


// export const app = initializeApp(firebaseConfig)
// export const db = getDatabase()

export const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }