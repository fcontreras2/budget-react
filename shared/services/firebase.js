import env from '@enviroments';
import * as firebase from 'firebase'

if (!firebase.apps.length) 
  firebase.initializeApp(env.firebaseConfig);
else
  firebase.app();


export default {
  get: async(collection) => await firebase.database().ref(collection)
}
