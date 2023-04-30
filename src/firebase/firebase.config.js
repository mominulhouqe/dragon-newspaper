// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('ernvironment variable', import.meta.env.VITE_apiKey);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain, 
  projectId: import.meta.env.VITE_projectId, 
  storageBucket: import.meta.env.VITE_storageBucket, 
  messagingSenderId: import.meta.env.VITE_messagingSenderId, 
  appId: import.meta.env.VITE_appId, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


/* 
  VITE_apiKey= "AIzaSyCdAmFng4XAXPPGMlUXHw2B4Mhxj-y3lhc",
  VITE_authDomain= "newspaper-d6a09.firebaseapp.com",
  VITE_projectId= "newspaper-d6a09",
  VITE_storageBucket= "newspaper-d6a09.appspot.com",
  VITE_messagingSenderId= "159140379853",
  VITE_appId= "1:159140379853:web:5e14b9019796e494e13d84",

*/