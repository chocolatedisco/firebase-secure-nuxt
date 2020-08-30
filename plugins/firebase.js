import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyAdluf5d82sTjqy9PiizQ1WfrbQRdpFJ0k",
        authDomain: "auth-4306c.firebaseapp.com",
        databaseURL: "https://auth-4306c.firebaseio.com",
        projectId: "auth-4306c",
        storageBucket: "auth-4306c.appspot.com",
        messagingSenderId: "291497236298",
        appId: "1:291497236298:web:19fdc55481edf37d1553b3"
    }
  )
}

export default firebase