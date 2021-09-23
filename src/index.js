import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
Add firebase: https://github.com/FirebaseExtended/reactfire/blob/main/docs/quickstart.md
*/ 
import { doc, getFirestore } from 'firebase/firestore';
import { FirebaseAppProvider, FirestoreProvider, useFirestoreDocData, useFirestore, useFirebaseApp } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDTAUDYItKCyzmnRuq691jF8jwR-zrYxak",
  authDomain: "hello-world-66.firebaseapp.com",
  projectId: "hello-world-66",
  storageBucket: "hello-world-66.appspot.com",
  messagingSenderId: "9205755173",
  appId: "1:9205755173:web:8a5d1b88c2eff20570becc",
  measurementId: "G-NJV12PYM0J"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
