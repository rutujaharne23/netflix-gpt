import { useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const Login = () => {
    const [isSignin, setIsSignin] = useState(true);

    const handleSignin = () => {
        setIsSignin(!isSignin)
    }

    return (
        <div className="h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center ">
            <Header />
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
                    alt="bg-image" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay"></div>
            </div>
            <form className="relative w-4/12 p-12 bg-black bg-opacity-70 flex flex-col items-center text-white">
                <h1 className="font-bold text-3xl self-start py-4">{isSignin ? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder="Email or Mobile number" className="p-3 m-3 w-full rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white" />
                <input type="password" placeholder="Password" className="p-3 m-3 w-full rounded-md bg-transparent border border-gray-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white" />
                <button className="p-2 m-2 w-full rounded-md bg-[#d9232e]">{isSignin ? "Sign In" : "Sign Up"}</button>
                <p className="self-start py-4">{isSignin ? "Are you new to Netflix?" : "Already a user!"} <Link className="underline" onClick={handleSignin}>{isSignin ? "Sign up now." : "Sign in now."}</Link></p>
            </form>
        </div>
    );
}