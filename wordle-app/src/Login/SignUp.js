import React from 'react';
import { Link } from 'react-router-dom'

const SignUp = ({ formik }) => {
    const { handleSubmit, handleChange, values, touched, handleBlur, errors  } = formik;

    return (
        <div className="z-10 m-auto mt-28 w-full max-w-xs mb-5 modal">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={values.name}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" />
                    {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="password" />
                    {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className={`w-full bg-blue-400 shadow text-white shadow font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline`}>
                        Sign up
                    </button>
                </div>
                <div className='mt-2 text-stone-500'>Already have an account? <Link to="/" className='text-blue-700'>Log in</Link></div>
            </form>
        </div>
    );
};

export default SignUp;