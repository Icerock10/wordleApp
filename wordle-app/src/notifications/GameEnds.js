import React, {useEffect} from 'react';
import CountDownTimer from "../App/CountDownTimer";
import { delayTillAnimationEnds } from "../actions/actions";

const GameEnds = ({ currentTry, userWord, guessedWord, dispatch, isAnimationPassed, userMessage }) => {

        useEffect(() => {
            if(guessedWord === userWord) {
                setTimeout(() => {
                    dispatch(delayTillAnimationEnds('Отлично'))
                }, 1500)
            }
            if(currentTry === 6) {
                setTimeout(() => {
                    dispatch(delayTillAnimationEnds(guessedWord))
                }, 1500)
            }
        }, [userWord, currentTry, dispatch, guessedWord])

    if(isAnimationPassed) {
        return <CountDownTimer dispatch={dispatch} userMessage={userMessage}/>
    }
     return null;
};

export default GameEnds;