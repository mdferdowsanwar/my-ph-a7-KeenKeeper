import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { QuickCheckInContext } from '../../context/QuickCheckInContext';

const Stats = () => {

    const {checkIn} = useContext(QuickCheckInContext);
    const callCount = checkIn.filter(ci => ci.type === "call").length;
    const textCount = checkIn.filter(ci => ci.type === "text").length;
    const videoCount = checkIn.filter(ci => ci.type === "video").length;

    const data = [
        { name: 'Call', value: callCount, fill: '#f39c12' },
        { name: 'Text', value: textCount, fill: '#7F37F5' },
        { name: 'Video', value: videoCount, fill: '#37A163' }
    ];

    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl font-bold my-5'>Friendship Analytics</h1>
            <div className='bg-base-100 border border-gray-300 mb-10 p-8'>
                <p className='font-semibold'>By Interaction Type</p>
                <div className='flex items-center justify-center'>
                    <PieChart style={{ width: '75%', maxWidth: '350px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={4}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Stats;