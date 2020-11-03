import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrOti9XicBuRbzZTIuL9C13QAnZPpI0Zg",
    authDomain: "jdev-3a99d.firebaseapp.com",
    databaseURL: "https://jdev-3a99d.firebaseio.com",
    projectId: "jdev-3a99d",
    storageBucket: "jdev-3a99d.appspot.com",
    messagingSenderId: "985116323303",
    appId: "1:985116323303:web:9ba571ef2263710bd3e142"
  };
  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  export default fire;