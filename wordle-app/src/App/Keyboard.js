import React, {useEffect} from 'react';
import { keyboard } from "../helpers/keyboard";
import { getPressedButtonAndAddLetter } from "../helpers/wordValidator";
import { icon } from "../helpers/icon";
import { highLightButton } from "../helpers/highlight";

const Keyboard = ({ words, currentTry, dispatch, letters , guessedWord, userWord}) => {

    useEffect(() => {
        const handler = (event) => {
            event.preventDefault();
            getPressedButtonAndAddLetter(event.key, dispatch, currentTry, words, guessedWord, userWord);
        };
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    });

    const checkKey = (e) => {
        const closestKeyName = e.target.closest('.text-black').name;
        getPressedButtonAndAddLetter(closestKeyName, dispatch, currentTry, words, guessedWord, userWord);
    }
    return (
        <div className="max-w-[36rem] flex flex-wrap justify-center m-auto w-full sm:mt-44 mt-6">
            {keyboard.map((key) => {
                return <button key={`key-${key}`}
                               onClick={(e) => checkKey(e)}
                               name={key}
                               className={key === 'Enter' || key === 'Backspace' ?
                                   'w-16 h-14 bg-slate-400 text-black rounded m-1' :
                                   highLightButton(key, letters)}>
                    {key === 'Backspace' ? icon : key}
                </button>
            })}
        </div>
    )
};

export default Keyboard;