import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGgzGQlxMmAo5UCca-pJQMnmloeYjjXns",
  authDomain: "laya-e622f.firebaseapp.com",
  projectId: "laya-e622f",
  storageBucket: "laya-e622f.firebasestorage.app",
  messagingSenderId: "501154021430",
  appId: "1:501154021430:web:a1aed325f5a72b9a951897"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();