import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDyVC-NphjeSNoREhbNOzwndRPxi4pGACE",
    authDomain: "htw-health.firebaseapp.com",
    databaseURL: "https://htw-health.firebaseio.com",
    projectId: "htw-health",
    storageBucket: "htw-health.appspot.com",
    messagingSenderId: "466183021001",
    appId: "1:466183021001:web:a973d0f1b65fc9b257c818",
    measurementId: "G-HX388CHK5K"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`doctors/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
      }

      return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage().ref();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;