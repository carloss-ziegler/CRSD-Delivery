import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDNoyfirjvaKRXafOedYHy1vA-8BDSAHbs",
  authDomain: "delivery-app-6b8b2.firebaseapp.com",
  projectId: "delivery-app-6b8b2",
  storageBucket: "delivery-app-6b8b2.appspot.com",
  messagingSenderId: "738081217135",
  appId: "1:738081217135:web:625e73de3d941e42210b9a",
  measurementId: "G-0D6YY4JKD7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
