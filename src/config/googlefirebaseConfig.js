
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyC549WGCxpiKqhYJhkx8VxlDwew4J1RMoc",
  authDomain: "projetomobilefatec-6daa5.firebaseapp.com",
  databaseURL: "https://projetomobilefatec-6daa5-default-rtdb.firebaseio.com",
  projectId: "projetomobilefatec-6daa5",
  storageBucket: "projetomobilefatec-6daa5.appspot.com",
  messagingSenderId: "339814240791",
  appId: "1:339814240791:web:46c7baedbf548345258252"
};


const appGoogle = initializeApp(firebaseConfig);

export const db = getFirestore(appGoogle)