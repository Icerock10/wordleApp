import React, {useDispatch, useSelector} from 'react-redux';
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import Game from './Game';
import { useFormik } from "formik";
import { Routes, Route } from "react-router-dom";
import { validationSchema } from "../Login/validator";
import ThankNotification from "../Login/ThankNotification";
import { createUser } from "../actions/actions";

const App = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userReducer);
    const { isLoggedIn, userName, userPassword } = userState;

    const formik = useFormik({
        initialValues: {
            name: '',
            password: ''
        },
        onSubmit: values => {
            return dispatch(createUser(values))
        },
        validationSchema
    })

    return (
        <Routes>
            <Route path='/' element={isLoggedIn ? <Game/> :
                <SignIn
                        isLoggedIn={isLoggedIn}
                        dispatch={dispatch}
                        userName={userName}
                        userPassword={userPassword}
                />}
            />
            <Route path='/signup' element={userName.length ? <ThankNotification /> : <SignUp formik={formik}/>}/>
        </Routes>
    );
}

export default App;