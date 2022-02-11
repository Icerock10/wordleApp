import React from 'react';
import { Link } from 'react-router-dom';

const ThankNotification = () => {
    return (
        <div className="m-auto mt-28 max-w-xs mb-5 flex-column justify-center shadow-md items-center p-6 bg-white">
            <div className='w-fit m-auto'><i className="gg-check-o bg-slate-500 text-white"/></div>
            <div className='w-fit m-auto text-zinc-600 text-xl'>Thank you for registration!</div>
            <div className='w-fit m-auto'>
                <Link className='text-blue-700' to='/'>Log in</Link>
            </div>
        </div>
    );
};

export default ThankNotification;