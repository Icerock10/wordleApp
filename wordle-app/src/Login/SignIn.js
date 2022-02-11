import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { validate } from "./validator";
import { loginUser } from "../actions/actions";


const SignIn = ({dispatch, userName, userPassword}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            userName,
            userPassword
        },
        validate,
        onSubmit: () => {
            return dispatch(loginUser())
        }
    })

    const { handleSubmit, handleBlur, handleChange, values, touched, errors } = formik;

    return (
        <div className="z-10 m-auto mt-28 w-full max-w-xs mb-5 modal">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" />
                    {touched.name && errors.name &&
                        <div className='text-red-500 mt-2'>{errors.name}</div>
                    }
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                        name="password"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="password" />
                    {touched.password && errors.password &&
                        <div className='text-red-500 mt-2'>{errors.password}</div>
                    }
                </div>
                <div className="flex justify-center">
                    <button type="submit" className={`w-full bg-blue-400 shadow text-white shadow font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline`}>
                    Log in
                    </button>
                </div>
                <div className='mt-2 text-stone-500'>Don't have an account? <Link to='/signup' className='text-blue-700'>Sign up</Link></div>
            </form>
        </div>
    );
};

export default SignIn;