import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
  
    apiKey: "AIzaSyDkWrA3iOrKHnnOBSi2t4nZhHvi18iNT1I",
    authDomain: "shopapp-b5419.firebaseapp.com",
    databaseURL: "https://shopapp-b5419.firebaseio.com",
    projectId: "shopapp-b5419",
    storageBucket: "",
    messagingSenderId: "468995049829",
    appId: "1:468995049829:web:a2c6238f6cfa8a3d"
  
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
