import React, {useEffect, useState} from 'react';
import { keyboard } from "../helpers/keyboard";

const Keyboard = () => {

    const [letter, setLetter] = useState([]);
     const handleClick = (e) => {
         if(letter.length === 5) {
             return null;
         }
        setLetter([...letter, e.target.name]);
    }

    useEffect(() => {
        const handler = (event) => {
            if(event.key === 'Backspace') {
                setLetter(letter.pop())
            }

            if (letter.length === 5 || event.key == 'Backspace') {
                return null;
            } else {
                setLetter([...letter, event.key]);
            }
        };

        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        };
    }, [letter]);

    return (
           <div className="keyboard-row flex flex-wrap justify-center m-auto w-full mt-72">
           {keyboard.map((key, index) => {
                return <button key={index} onClick={(e) =>
                 handleClick(e)}
                 name={key}
                 className={key === 'Enter' || key === 'Backspace' ? 'bigger bg-slate-400 text-white rounded m-1': 'huy bg-slate-400 text-white rounded m-1'}>{key}</button>
            })}
            </div>
  )
};

export default Keyboard;