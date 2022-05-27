import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyDQM6-BxrscIosJ78c5us2HiLanQzHPa7I",
  authDomain: "kulukirjanpito-e5c56.firebaseapp.com",
  projectId: "kulukirjanpito-e5c56",
  storageBucket: "kulukirjanpito-e5c56.appspot.com",
  messagingSenderId: "282270279490",
  appId: "1:282270279490:web:dab2e54eedf2cba6b30adb",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const root = document.getElementById("root");
// ReactDOM.render(
//   <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//     <App />
//   </FirebaseAppProvider>,
//   root
// );
