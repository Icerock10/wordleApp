import React from 'react';
import { highLightLetter } from "../helpers/highlight";
import { warningAnimation } from "../animations/animations";

const Letters = ({item, guessedWord, currentTry, index, notification}) => {

      return [...Array(5)].map((elem, i) => {
        return (
            <div key={`letter-${i}`} className={`${warningAnimation(index, i, currentTry, notification, item)}`}>
                <span className={`${highLightLetter(item, i, guessedWord, currentTry, index)}`}>{item[i]}</span>
            </div>
        );
    })
};

export default Letters;


