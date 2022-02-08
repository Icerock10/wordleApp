import React, {useEffect, useState} from "react";
import { resetGameState } from "../actions/actions";


const CountDownTimer = ({ dispatch , userMessage }) => {
    const minutes = 0
    const seconds = 10;
    const [[mins, secs], setTime] = useState([minutes, seconds]);

    useEffect(() => {
        if(secs === 0) {
            dispatch(resetGameState());
        }
    }, [secs])

     useEffect(() => {
        const tick = () => {
            if (mins === 0 && secs === 0) {
               return;
            }
           return setTime([mins, secs - 1]);
        };
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    return (
        <div className='flex items-center flex-col absolute top-20'>
            <div className={`${userMessage.length === 5 ? 'opacity-80 bg-black p-3 text-white' : 'bg-lime-500 p-3 text-white'} mb-2`}>{userMessage}</div>
            <span className='text-2xl text-slate-900 font-medium'>Resets in: <span className='text-3xl text-slate-900 font-medium'>{`
            ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</span></span>
        </div>
    );
};

export default CountDownTimer;