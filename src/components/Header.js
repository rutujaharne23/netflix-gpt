import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // Unsubscribe when component will unmount
    return () => unsubscribe(); 
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 z-10 flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && <div className="flex items-center">
        <img className="w-10 h-10 mx-3" src={user?.photoURL} alt="userIcon" />
        <button
          className="mx-3 px-4 py-2 bg-[#e50914] text-white font-semibold rounded-md hover:bg-[#f6121d] focus:outline-none focus:ring-2 focus:ring-[#f6121d] focus:ring-opacity-50 transition duration-300"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};
