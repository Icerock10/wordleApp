import React, {useDispatch, useSelector} from 'react-redux';
import Keyboard from "./Keyboard";
import Letters from "./Letters";
import {useEffect} from "react";

const App = () => {
   const gameState = useSelector(state => state);
      const {word, guessedWord, userWord, currentTry} = gameState;


  return (
    <div className="flex-initial flex justify-center items-center flex-col m-auto max-w-2xl">
          <div className='mb-24'>Wordle game</div>
        {word.map((item, i) => {
           return <div key={`word-${i}`} className='flex'>
               <Letters
               item={item}
               userWord={userWord}
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


// const highLightLetter = (item, i) => {
//     if(item.length < 5) {
//         return 'text-3xl font-medium'
//     }
//     if(guessedWord[i] === item[i]) {
//         return 'bg-lime-500 highlight text-3xl font-medium'
//     } else if(guessedWord.includes(item[i])) {
//         return 'bg-orange-500 highlight text-3xl font-medium'
//     }
//     return 'bg-gray-500 highlight text-3xl font-medium'
// }