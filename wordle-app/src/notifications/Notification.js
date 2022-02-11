import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { sendUserNotification } from "../actions/actions";

const Notification = ({dispatch, message}) => {
    const [fadeIn, setFadeIn] = useState({fade: "fade-in"})

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeIn.fade === "fade-in") {
                setFadeIn({ fade: "fade-out" });
            } else {
                setFadeIn({ fade: "fade-out" });
                dispatch(sendUserNotification({inValid: true, message: ''}))
            }
        }, 700);
        return () => {
            clearInterval(timeout);
        };
    }, [fadeIn]);

    return (
        <div className={`absolute h-12 sm:opacity-90 z-10 opacity-100 flex items-center top-28 bg-zinc-800 text-white tracking-widest rounded-lg px-4 ${fadeIn.fade}`}>
           <span>{message}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { message } = state.wordReducer.notification
    return {
        message
    }
}
export default connect(mapStateToProps)(Notification);
