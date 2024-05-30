import { useRef, useState } from "react";
import { Header } from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignin = () => {
    setIsSignin(!isSignin);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(email.current?.value, password.current?.value);
    setErrorMessage(message)

    if(message) return;

    if(!isSignin){
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current?.value, photoURL: "https://avatars.githubusercontent.com/u/80842769?v=4https://avatars.githubusercontent.com/u/80842769?v=4"
        }).then(() => {
          // Profile updated!
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse")
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });

    }else{
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
        navigate("/");
      });
    }
  }

  return (
    <div className="h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center ">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bgImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="relative w-4/12 p-12 bg-black bg-opacity-70 flex flex-col items-center text-white">
        <h1 className="font-bold text-3xl self-start py-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
          ref={name}
            type="text"
            placeholder="Full name"
            className="p-3 m-3 w-full rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile number"
          className={`p-3 m-3 w-full rounded-md bg-transparent border ${errorMessage ? "border-[#d9232e]" : "border-gray-300"} border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className={`p-3 m-3 w-full rounded-md bg-transparent border ${errorMessage ? "border-[#d9232e]" : "border-gray-300"} border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white`}
        />
        <p className="self-start text-sm text-[#d9232e]">{errorMessage}</p>
        <button className="p-2 m-2 w-full rounded-md bg-[#d9232e]" onClick={handleButtonClick}>
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="self-start py-4">
          {isSignin ? "Are you new to Netflix?" : "You are already a user!"}{" "}
          <Link className="underline" onClick={handleSignin}>
            {isSignin ? "Sign up now." : "Sign in now."}
          </Link>
        </p>
      </form>
    </div>
  );
};
