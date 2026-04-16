import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriendsHook from '../../hooks/useFriendsHook';
import { ClockLoader } from 'react-spinners';
import FriendsCard from '../../components/ui/FriendsCard';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { FiArchive } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { BsChatLeftText } from 'react-icons/bs';
import { CiVideoOn } from 'react-icons/ci';
import { QuickCheckInContext } from '../../context/QuickCheckInContext';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    // console.log(id, "id");
    const { friends, loading } = useFriendsHook();
    const expectedFriend = friends.find((friend) => String(friend.id) === id);

    const {checkIn, setCheckIn} = useContext(QuickCheckInContext);

    if (loading) {
        return (
            <div className="h-[40vh] flex justify-center items-center">
                <ClockLoader color="#244D3F" size={80} />
            </div>
        );
    }

    const handleCheckIn = (type) => {
        const newCheckIn = {
            name: expectedFriend.name,
            type: type,
            time: new Date,
        };

         setCheckIn([...checkIn, newCheckIn]);
         toast.success(`${type} with ${expectedFriend.name}`);
    };

    return (
        <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 my-12">
            {/* Left Side */}
            <div className='space-y-3'>
                <div className="bg-base-100 shadow-md rounded-sm">
                    <div className="flex justify-center items-center flex-col p-5">
                        <figure>
                            <img src={expectedFriend.picture} alt={expectedFriend.name} className="h-20 w-auto rounded-full" />
                        </figure>
                        <h2 className="card-title text-center">{expectedFriend.name}</h2>
                        <div className="flex justify-between items-center gap-3 flex-col">

                            <span className={`text-white flex items-center px-3 font-semibold rounded-full
                        ${expectedFriend.status === "overdue"
                                    ? "bg-red-500"
                                    : expectedFriend.status === "almost due"
                                        ? "bg-yellow-500"
                                        : "bg-green-800"}`}>
                                {expectedFriend.status}
                            </span>

                            <div className='flex gap-1 flex-wrap'>
                                {
                                    expectedFriend.tags.map((tag, index) =>
                                        <span key={index} className='badge badge-soft badge-success text-sm rounded-full'>
                                            {tag}
                                        </span>)
                                }
                            </div>
                            <p className='text-gray-500'>"{expectedFriend.bio}"</p>
                            <p className='text-gray-500 text-sm'>Preferred: {expectedFriend.email}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-base-100 shadow-md py-3 rounded-sm">
                    <p className='flex items-center gap-2 justify-center'><HiOutlineBellSnooze /> Snooze 2 Weeks</p>
                </div>
                <div className="shadow-md bg-base-100 rounded-sm py-3">
                    <p className='flex items-center gap-2 justify-center'><FiArchive /> Archive</p>
                </div>
                <div className="shadow-md bg-base-100 text-error py-3 rounded-sm">
                    <p className='flex items-center gap-2 justify-center'><RiDeleteBin6Line /> Delete</p>
                </div>
            </div>
            {/* Right Side */}
            <div className='md:col-span-2 space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className="bg-base-100 shadow-md py-6 rounded-sm flex items-center justify-center flex-col gap-2">
                        <p className='text-3xl font-semibold text-gray-600'>{expectedFriend.days_since_contact}</p>
                        <p className='text-gray-500'>Days Since Contact</p>
                    </div>
                    <div className="bg-base-100 shadow-md py-6 rounded-sm flex items-center justify-center flex-col gap-2">
                        <p className='text-3xl font-semibold text-gray-600'>{expectedFriend.goal}</p>
                        <p className='text-gray-500'>Goal (Days)</p>
                    </div>
                    <div className="bg-base-100 shadow-md py-6 rounded-sm flex items-center justify-center flex-col gap-2">
                        <p className='text-3xl font-semibold text-gray-600'>{new Date(expectedFriend.next_due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                        <p className='text-gray-500'>Next Due</p>
                    </div>
                </div>

                <div className="bg-base-100 shadow-md rounded-sm flex justify-between gap-2 px-5 py-10">
                    <div className='space-y-3'>
                        <h2 className='text-xl font-semibold text-[#244D3F]'>Relationship Goal</h2>
                        <p className='text-gray-500 text-sm'>Connect every <span className='font-semibold'>{expectedFriend.goal} days</span></p>
                    </div>
                    <button className='btn text-sm'>Edit</button>
                </div>

                <div className="bg-base-100 shadow-md rounded-sm px-5 py-6">
                    <h2 className='text-xl font-semibold text-[#244D3F] mb-2'>Quick Check-In</h2>
                    <div className='grid grid-cols-3 gap-3'>
                        <button onClick={() => handleCheckIn("call")} className='border border-gray-300 rounded-lg py-5 bg-gray-100 text-xl flex flex-col justify-center items-center gap-2 cursor-pointer'>
                            <LuPhoneCall />
                            <span>Call</span>
                        </button>

                        <button onClick={() => handleCheckIn("text")} className='border border-gray-300 rounded-lg py-5 bg-gray-100 text-xl flex flex-col justify-center items-center gap-2 cursor-pointer'>
                            <BsChatLeftText />
                            <span>Text</span>
                        </button>

                        <button onClick={() => handleCheckIn("video")} className='border border-gray-300 rounded-lg py-5 bg-gray-100 text-xl flex flex-col justify-center items-center gap-2 cursor-pointer'>
                            <CiVideoOn />
                            <span>Video</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;