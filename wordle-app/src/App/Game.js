import React from 'react';
import GameEnds from "../notifications/GameEnds";
import Notification from "../notifications/Notification";
import Letters from "./Letters";
import Keyboard from "./Keyboard";
import {useDispatch, useSelector} from "react-redux";

const Game = () => {
    const gameState = useSelector(state => state.wordReducer);

    const {words, guessedWord, currentTry, notification, letters, userWord, isAnimationPassed, userMessage} = gameState;
    const dispatch = useDispatch();

    return (
        <div className="flex-initial flex justify-center items-center flex-col m-auto max-w-2xl">
            <div className='sm:mb-40 mb-4 font-bold text-4xl tracking-widest py-2 border-b-2 text-center w-8/12'>WORDLE</div>
            <GameEnds
                currentTry={currentTry}
                userWord={userWord}
                guessedWord={guessedWord}
                dispatch={dispatch}
                isAnimationPassed={isAnimationPassed}
                userMessage={userMessage}
            />
            {!notification.isValid && <Notification />}
            {words.map((word, i) => {
                return <div key={`word-${i}`} className='flex'>
                    <Letters
                        userWord={userWord}
                        word={word}
                        guessedWord={guessedWord}
                        wordIndex={i}
                        currentTry={currentTry}
                        notification={notification}
                    />
                </div>
            })}
            <Keyboard
                words={words}
                currentTry={currentTry}
                dispatch={dispatch}
                letters={letters}
                guessedWord={guessedWord}
                userWord={userWord}
            />
        </div>
    );
};

export default Game;