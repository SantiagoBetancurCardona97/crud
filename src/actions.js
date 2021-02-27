import {firebaseApp} from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
import { defaultsDeep } from 'lodash'

const db =  firebase.firestore(firebaseApp)

export const getCollection = async(collection) => {
    const result = { statusResponse : false, data: null, error: null}
    try {
      const data = await db.collection(collection).get()
      const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
      result.statusResponse = true
      result.data = arrayData
    } catch(error) {
        result.error = error
    }
    return result
}       

export cosnt addDocument = async(collection, data) => {
    const result = { statusResponse : false, data: null, error: null}
    try{

    } catch (error) {
        result.error = error
    }
}