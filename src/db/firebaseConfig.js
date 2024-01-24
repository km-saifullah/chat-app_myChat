import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMIIs3wgpefeVqATS3ojk7t4diXP3hraA",
  authDomain: "mychat-e0d4c.firebaseapp.com",
  projectId: "mychat-e0d4c",
  storageBucket: "mychat-e0d4c.appspot.com",
  messagingSenderId: "738845317105",
  appId: "1:738845317105:web:b04db093893c2007285650",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
