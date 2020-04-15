import *  as firebase from 'firebase/app'
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: process.env.React_apiKey,
    authDomain: process.env.React_authDomain,
    databaseURL: process.env.React_databaseURL,
    projectId: process.env.React_projectId,
    storageBucket: process.env.React_storageBucket,
    messagingSenderId: process.env.React_messagingSenderId,
    appId: process.env.React_appId
})

export default firebaseApp;