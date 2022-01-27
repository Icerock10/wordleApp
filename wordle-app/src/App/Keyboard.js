import React, {useEffect, useState} from 'react';
import { keyboard, letterValidator } from "../helpers/keyboard";
import { connect } from "react-redux";
import { wordsInList } from "../helpers/guess";


const Keyboard = ({ word, currentTry, dispatch }) => {

    const wordValidator = (word) => {
        const filtered = word.filter((item, index) => {
            return index === currentTry
        })
        const splitWord = filtered.join('').split('')
        const finalResult = wordsInList.filter((item, index) => item.includes(filtered[0]))

        if(splitWord.length < 5) {
            alert('Не достаточно букв')
        }
        if(!finalResult.length) {
            return  alert('Нет в списке')
        }
        dispatch({type: "CHANGE_STAGE"})
}
      const checkButtonAndAddLetter = (key) => {
        if(key === 'Enter') {
            wordValidator(word)
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
    }, [word]);


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
    const { word, currentTry } = state;
    return {
        word,
        currentTry
    }
}

export default connect(mapStateToProps)(Keyboard);