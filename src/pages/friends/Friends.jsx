import React from 'react';
import useFriendsHook from '../../hooks/useFriendsHook';
import { ClockLoader } from 'react-spinners';
import FriendsCard from '../../components/ui/FriendsCard';

const Friends = () => {
    const { friends, loading } = useFriendsHook();
    console.log(friends, "Friends");
    return (
        <div className="w-9/12 mx-auto my-10">
            <div className="mb-5">
                <h2 className="font-bold text-2xl">Your Friends</h2>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-16">
                    <ClockLoader color="#244D3F" size={80} />
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {friends.map((friend, ind) => {
                        return <FriendsCard friend={friend} key={ind} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default Friends;