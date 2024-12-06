import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUr1-qbx20l_bxHFuoVGF6YptWQBxwXis",
  authDomain: "hotel-rez-app.firebaseapp.com",
  projectId: "hotel-rez-app",
  storageBucket: "hotel-rez-app.firebasestorage.app",
  messagingSenderId: "943278255290",
  appId: "1:943278255290:web:4a3f69cd07c604cc12a683",
  measurementId: "G-MDKBME1NXK",
};

export const firebaseApp = initializeApp(firebaseConfig);
