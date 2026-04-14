import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='w-9/12 mx-auto flex justify-center items-center flex-col gap-3 py-10'>
            <h1 className='font-bold text-[48px]'>Friends to keep close in your life</h1>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><FaPlus /> Add a Friend</button>
        </div>
    );
};

export default Banner;