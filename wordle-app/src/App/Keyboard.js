import React, {useEffect, useState} from 'react';
import { keyboard, letterValidator } from "../helpers/keyboard";
import { connect } from "react-redux";

const Keyboard = ({ dispatch }) => {

      const checkButtonAndAddLetter = (key) => {
        if(key === 'Enter') {
            return dispatch({type: "CHANGE_STAGE"})
       }
        if(key === 'Backspace'){
            return dispatch({type: "REMOVE_LETTER"})
        }
        if(!letterValidator(key).length) return;
        return dispatch({type: "ADD_WORD", payload: key.toUpperCase()})
    }
     const handleClick = (e) => {
         checkButtonAndAddLetter(e.target.name)
    }
    useEffect(() => {
        const handler = (event) => {
            checkButtonAndAddLetter(event.key);
        };
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, []);


    return (
        <div className="max-w-[36rem] flex flex-wrap justify-center m-auto w-full mt-64">
            {keyboard.map((key, index) => {
                return <button key={`key-${key}`} onClick={(e) =>
                    handleClick(e)}
                               name={key}
                               className={key === 'Enter' || key === 'Backspace' ? 'w-16 h-14 bg-slate-400 text-white rounded m-1' : 'w-10 h-14 bg-slate-400 text-white rounded m-1'}>
                    {key}
                </button>
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    const { word } = state;
    return {
        word
    }
}

export default connect(mapStateToProps)(Keyboard);