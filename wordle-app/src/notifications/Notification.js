import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";

const Notification = ({dispatch, message}) => {
    const [fadeIn, setFadeIn] = useState({fade: "fade-in"})

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeIn.fade === "fade-in") {
                setFadeIn({ fade: "fade-out" });
            } else {
                setFadeIn({ fade: "fade-out" });
                dispatch({type: "NOTIFICATION", payload: {inValid: true, message: ''}})
            }
        }, 700);
        return () => {
            clearInterval(timeout);
        };
    }, [fadeIn]);

    return (
        <div className={`absolute h-12 right-96 opacity-90 flex items-center top-32 bg-zinc-800 text-white tracking-widest rounded-lg px-4  ${fadeIn.fade}`}>
           <span>{message}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { message } = state.notification
    return {
        message
    }
}
export default connect(mapStateToProps)(Notification);
