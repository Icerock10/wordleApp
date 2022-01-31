import React, {useSelector} from 'react-redux';
import Keyboard from "./Keyboard";
import Letters from "./Letters";
import Notification from "../notifications/Notification";


const App = () => {
   const gameState = useSelector(state => state);
      const {word, guessedWord, currentTry, notification} = gameState;

  return (
    <div className="flex-initial flex justify-center items-center flex-col m-auto max-w-2xl">
          <div className='mb-40 font-bold text-4xl tracking-widest py-2 border-b-2 text-center w-8/12'>WORDLE</div>

        {word.map((item, i) => {
           return <div key={`word-${i}`} className='flex'>
               {!notification.isValid && <Notification />}
               <Letters
               item={item}
               guessedWord={guessedWord}
               index={i}
               currentTry={currentTry}
               />
                 </div>
        })}
        <Keyboard
            guessedWord={guessedWord}
        />
    </div>
  );
}

export default App;