import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA28dG5RSSeLUgn37wrcIlY9paM3HbavC8",
  authDomain: "my-app1-5e73d.firebaseapp.com",
  projectId: "my-app1-5e73d",
  storageBucket: "my-app1-5e73d.appspot.com",
  messagingSenderId: "226068746790",
  appId: "1:226068746790:web:a986c0b7ed528b1c8fcce7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
