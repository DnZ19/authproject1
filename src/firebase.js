import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// require('dotenv').config();


const app = firebase.initializeApp({

    //is now dev info, change .env when to prod

    apiKey: "AIzaSyAHfe4Z_uIKWy6KIeCkHsvDhS11R6kF38c",
   // apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",

    authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID",
    appId: "process.env.REACT_APP_FIREBASE_APP_ID",

})

export const auth = app.auth();
export default app;

