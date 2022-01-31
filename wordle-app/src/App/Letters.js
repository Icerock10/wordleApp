import React from 'react';
import { highLightLetter } from "../helpers/highlight";

const Letters = ({item, guessedWord, currentTry, index}) => {

      return [...Array(5)].map((elem, i) => {
        return (
            <div key={`letter-${i}`} className='w-16 h-16 border-solid m-0.5 border-2 border-slate-200 flex items-center justify-center'>
                <span className={`${highLightLetter(item, i, guessedWord, currentTry, index)}`}>{item[i]}</span>
            </div>
        );
    })
};

export default Letters;


