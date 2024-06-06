import { useSelector } from "react-redux";
import { language } from "../hooks/languageConstants";

export const GPTSerchBar = () => {
    const selectedLanguage = useSelector(store => store.config.lang)
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black bg-opacity-50 grid grid-cols-12">
                <input type="text" className="p-2 m-4 col-span-9" placeholder={language[selectedLanguage].gptSearchPlaceholder} />
                <button className="col-span-3 m-4 py-2 px-4 bg-[#e50914] text-white rounded-lg">{language[selectedLanguage].search}</button>
            </form>
        </div>
    );
}