import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuDL3rhfdZyR47I9fdWHk1sb8irZfHVII",
  authDomain: "busan-aug.firebaseapp.com",
  projectId: "busan-aug",
  storageBucket: "busan-aug.firebasestorage.app",
  messagingSenderId: "947761429229",
  appId: "1:947761429229:web:259ed723f12991eeccaae4",
  measurementId: "G-SYJQNCMCXD"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };