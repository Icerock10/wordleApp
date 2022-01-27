import React, {useSelector} from 'react-redux';
import Keyboard from "./Keyboard";
import Letters from "./Letters";

const App = () => {
   const gameState = useSelector(state => state);
      const {word, guessedWord} = gameState;

  return (
    <div className="flex-initial flex justify-center items-center flex-col m-auto max-w-2xl">
          <div className='mb-24'>Wordle game</div>
        {word.map((item, i) => {
           return <div key={i} className='flex'>
               <Letters
               item={item}
               guessedWord={guessedWord}
               />
                 </div>
        })}
        <Keyboard />
    </div>
  );
}

export default App;
