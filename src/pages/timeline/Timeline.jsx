import React, { useContext, useState } from 'react';
import { QuickCheckInContext } from '../../context/QuickCheckInContext';
import { FaAngleDown } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { BsChatLeftText } from 'react-icons/bs';
import { CiVideoOn } from 'react-icons/ci';

const Timeline = () => {
    const getIcon = (type) => {
        if(type === "call") return <LuPhoneCall />;
        if(type === "text") return <BsChatLeftText />;
        if(type === "video") return <CiVideoOn />;
    }
    const { checkIn } = useContext(QuickCheckInContext);

    const [filter, setFilter] = useState("all");
    const filterData = filter === "all" ? checkIn : checkIn.filter(ci => ci.type === filter);

    return (
        <div className="w-9/12 mx-auto my-10">
            <h2 className='text-3xl font-bold mb-5'>Timeline</h2>
            <div className='mb-5'>
                <button className="btn w-48 flex justify-between" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Filter Timeline <FaAngleDown />
                </button>
                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li><a onClick={() => setFilter("call")}><LuPhoneCall /> Filter by Call</a></li>
                    <li><a onClick={() => setFilter("text")}><BsChatLeftText /> Filter by Text</a></li>
                    <li><a onClick={() => setFilter("video")}><CiVideoOn /> Filter by Video</a></li>
                    <li><a onClick={() => setFilter("all")}> Show all Check IN</a></li>
                </ul>
            </div>

            {checkIn.length === 0 ? (
                <h2 className="font-bold text-4xl text-center my-5 bg-base-100 shadow-lg rounded-lg py-20">
                    No Check In found!
                </h2>
            ) : (
                filterData.map((ci, ind) => {
                    return (
                        <div key={ind} className="flex gap-4 items-center shadow p-3 rounded-md bg-base-100 mb-5">
                            <div className='text-2xl text-[#244D3F]'>
                                {getIcon(ci.type)}
                            </div>

                            <div>
                                <p><span className='font-semibold text-[#244D3F]'>{ci.type}</span> with {ci.name}</p>
                                <p className='text-sm text-gray-500'>
                                    {new Date(ci.time).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                </p>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Timeline;