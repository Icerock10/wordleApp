import React, {useEffect, useState} from 'react';

const Letters = ({item, guessedWord, currentTry, index}) => {

    const placeHolderArray = ['','','','',''];

    const highLightLetter = (item, i) => {
         if(!item) {
             return;
         }
    if(index === currentTry) {
        return 'text-3xl font-medium'
    }
        if(guessedWord[i] === item[i]) {
            return 'bg-lime-500 highlight text-3xl font-medium text-white'
        } else if (guessedWord.includes(item[i])) {
            return 'bg-orange-500 highlight text-3xl font-medium text-white'
        }
          return 'bg-gray-500 highlight text-3xl font-medium text-white'
}

      return placeHolderArray.map((elem, i) => {
        return (
            <div key={`letter-${i}`} className='w-16 h-16 border-solid m-0.5 border-2 border-slate-200 flex items-center justify-center'>
                <span className={`${highLightLetter(item, i)}`}>{item[i]}</span>
            </div>
        );
    })
};

export default Letters;


