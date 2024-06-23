// import { userLogin } from "@/services/auth/auth";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;

const firebaseConfig = {
  apiKey: "AIzaSyCQRYBcC_8TGojGGtUCRWWdRFnbFPgVPXs",
  authDomain: "style-sinc.firebaseapp.com",
  projectId: "style-sinc",
  storageBucket: "style-sinc.appspot.com",
  messagingSenderId: "554120172939",
  appId: "1:554120172939:web:73b7cfef688c471f918b8e",
  measurementId: "G-6LTX6E3E4T",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      const user = result.user;
      user
        .getIdTokenResult()
        .then((user) => userLogin(user.token).then((api) => {
        }));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};

const auth = getAuth();

const logout = () => {
  signOut(auth)
    .then(() => {
      // Deslogado com sucesso
    })
    .catch((error) => {
      // Ocorreu um erro ao deslogar
    });
};

export { signInWithGoogle, logout, auth };