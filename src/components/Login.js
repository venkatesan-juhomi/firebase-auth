import React from 'react';
import "../App.css";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import { useHistory } from 'react-router-dom';


export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const firebaseConfig = {
    apiKey: "**********",
    authDomain: "**********",
    projectId: "**********",
    storageBucket: "**********",
    messagingSenderId: "**********",
    appId: "**********"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(authActions.login());
        history.push("/home");
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;
        // const email = result.user.email;
        dispatch(authActions.userName(name));
        dispatch(authActions.profilePic(profilePic));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  )
}