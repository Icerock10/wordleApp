import React, {useEffect} from 'react';
import { keyboard } from "../helpers/keyboard";
import { connect } from "react-redux";
import { getPressedButtonAndAddLetter } from "../helpers/wordValidator";
import { icon } from "../helpers/icon";

const Keyboard = ({ word, currentTry, dispatch }) => {

    useEffect(() => {
        const handler = (event) => {
            event.preventDefault();
            getPressedButtonAndAddLetter(event.key, dispatch, currentTry, word);
        };
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [word]);

    const checkKey = (e) => {
        const closestKeyName = e.target.closest('.text-black').name;
        getPressedButtonAndAddLetter(closestKeyName, dispatch, currentTry, word);
    }

    const highLightButton = (key) => {
        return 'w-10 h-14 bg-slate-400 text-black rounded m-1'
    }

    return (
        <div className="max-w-[36rem] flex flex-wrap justify-center m-auto w-full mt-44">
            {keyboard.map((key) => {
                return <button key={`key-${key}`}
                               onClick={(e) => checkKey(e)}
                               name={key}
                               className={key === 'Enter' || key === 'Backspace' ?
                                   'w-16 h-14 bg-slate-400 text-black rounded m-1' :
                                   highLightButton(key)}>
                    {key === 'Backspace' ? icon : key}
                </button>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    const { word, currentTry } = state;
    return {
        word,
        currentTry
    }
}

export default connect(mapStateToProps)(Keyboard);