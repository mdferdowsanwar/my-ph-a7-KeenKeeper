import React from 'react';

const Summary = () => {
    return (
        <div className='w-9/12 mx-auto pb-10 border-b border-gray-600'>
            <div className='grid grid-col sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='shadow-lg bg-white p-8 text-center space-y-2'>
                    <h2 className='font-semibold text-3xl'>10</h2>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                 <div className='shadow-lg bg-white p-8 text-center space-y-2'>
                    <h2 className='font-semibold text-3xl'>3</h2>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                 <div className='shadow-lg bg-white p-8 text-center space-y-2'>
                    <h2 className='font-semibold text-3xl'>6</h2>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                 <div className='shadow-lg bg-white p-8 text-center space-y-2'>
                    <h2 className='font-semibold text-3xl'>12</h2>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;