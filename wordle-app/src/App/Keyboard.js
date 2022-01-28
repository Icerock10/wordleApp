import React, {useEffect, useState} from 'react';
import { keyboard, letterValidator } from "../helpers/keyboard";
import { connect } from "react-redux";
import { wordsInList } from "../helpers/guess";


const Keyboard = ({ word, currentTry, dispatch, guessedWord }) => {

    const wordValidator = (word, key) => {
        const filtered = word.filter((item, index) => {
            return index === currentTry
        })
        if(filtered.join('').split('').length < 5) {
           return alert('Не достаточно букв')
        }
        const finalResult = wordsInList.filter((item, index) => item.includes(filtered[0]))
        if(!finalResult.length) {
            return alert('Нет в списке')
        }
     return dispatch({type: "CHANGE_STAGE", payload: finalResult})
}
      const checkButtonAndAddLetter = (key) => {
        if(key === 'Enter') {
            wordValidator(word, key)
          }
        if(key === 'Backspace'){
            return dispatch({type: "REMOVE_LETTER"})
        }
        if(!letterValidator(key).length) return;
        return dispatch({type: "ADD_WORD", payload: key.toUpperCase()})
    }
    useEffect(() => {
        const handler = (event) => {
            checkButtonAndAddLetter(event.key);
        };
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [word]);




    return (
        <div className="max-w-[36rem] flex flex-wrap justify-center m-auto w-full mt-64">
            {keyboard.map((key, index) => {
                return <button key={`key-${key}`}
                               name={key}
                               className={key === 'Enter' || key === 'Backspace' ? 'w-16 h-14 bg-slate-400 text-white rounded m-1' : 'w-10 h-14 bg-slate-400 text-white rounded m-1'}>
                    {key}
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