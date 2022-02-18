import React from 'react';
import { highLightLetter } from "../helpers/highlight";
import { warningAnimation } from "../animations/animations";

const Letters = ({userWord, word, guessedWord, currentTry, wordIndex, notification}) => {
      return [...Array(5)].map((letter, index) => {
        return (
            <div key={`letter-${index}`} className={`${warningAnimation(wordIndex, index, currentTry, notification, word)}`}>
                <span className={`${highLightLetter(word, index, guessedWord, currentTry, wordIndex, userWord)}`}>{word[index]}</span>
            </div>
        );
    })
};

export default Letters;


