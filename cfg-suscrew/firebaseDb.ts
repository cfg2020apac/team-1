import * as firebase from 'firebase';
import 'firebase/firestore'
import firebaseConfig from './firebaseKey';

firebase.initializeApp(firebaseConfig)

const firebaseDb = firebase.firestore()

export default firebaseDb
