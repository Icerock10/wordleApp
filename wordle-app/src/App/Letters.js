import React from 'react';

const Letters = ({item, guessedWord}) => {

    const placeHolderArray = ['','','','',''];

    const highLightLetter = (itemOfIndex, i) => {
        if(!itemOfIndex || !guessedWord.length) {
            return 'text-3xl font-medium';
        }
        const split = itemOfIndex.split('')

        if(guessedWord[i] === split[i]) {
            return 'bg-lime-500 highlight text-3xl font-medium'
        } else if(guessedWord.includes(split[i])) {
            return 'bg-orange-500 highlight text-3xl font-medium'
        }
           return 'bg-gray-500 highlight text-3xl font-medium'
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


