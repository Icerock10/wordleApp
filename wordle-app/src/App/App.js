import React, {useDispatch, useSelector} from 'react-redux';
import Keyboard from "./Keyboard";
import Letters from "./Letters";
import Notification from "../notifications/Notification";
import GameEnds from "../notifications/GameEnds";

const App = () => {
   const gameState = useSelector(state => state);
      const {word, guessedWord, currentTry, notification, letters, userWord, isAnimationPassed, userMessage} = gameState;
      const dispatch = useDispatch();

  return (
    <div className="flex-initial flex justify-center items-center flex-col m-auto max-w-2xl">
          <div className='mb-40 font-bold text-4xl tracking-widest py-2 border-b-2 text-center w-8/12'>WORDLE</div>
       <GameEnds
           currentTry={currentTry}
           userWord={userWord}
           guessedWord={guessedWord}
           dispatch={dispatch}
           isAnimationPassed={isAnimationPassed}
           userMessage={userMessage}
       />
        {!notification.isValid && <Notification />}
        {word.map((item, i) => {
           return <div key={`word-${i}`} className='flex'>
               <Letters
               item={item}
               guessedWord={guessedWord}
               index={i}
               currentTry={currentTry}
               notification={notification}
               />
                 </div>
        })}
        <Keyboard
            word={word}
            currentTry={currentTry}
            dispatch={dispatch}
            letters={letters}
            guessedWord={guessedWord}
            userWord={userWord}
        />
    </div>
  );
}

export default App;