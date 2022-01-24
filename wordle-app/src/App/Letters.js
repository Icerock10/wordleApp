import React from 'react';

const Letters = ({item}) => {
    const fakeArray = ['','','','',''];

     return fakeArray.map((elem, i) => {
        return (
            <div key={`letter-${i}`} className='w-16 h-16 border-solid m-0.5 border-2 border-slate-200 flex items-center justify-center'>
                <span className='text-3xl font-medium'>{item[i]}</span>
            </div>
        );
    })
};

export default Letters;


