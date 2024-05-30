import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
