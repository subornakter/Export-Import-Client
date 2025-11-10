// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL4e4Zax1fgXy4XbKi0urZIBi6Fu1oNY8",
  authDomain: "import-export-project-f2aeb.firebaseapp.com",
  projectId: "import-export-project-f2aeb",
  storageBucket: "import-export-project-f2aeb.firebasestorage.app",
  messagingSenderId: "393962410119",
  appId: "1:393962410119:web:26f001854afbfba3e6e822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);