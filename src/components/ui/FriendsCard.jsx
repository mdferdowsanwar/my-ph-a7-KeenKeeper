import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {
    
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 shadow-lg">

            <div className="flex justify-center items-center flex-col p-5">
                <figure>
                    <img src={friend.picture} alt={friend.name} className="h-20 w-auto rounded-full" />
                </figure>
                <h2 className="card-title text-center">{friend.name}</h2>
                <div className="flex justify-between items-center gap-3 flex-col">
                    <span className="text-sm text-gray-500">
                        {friend.days_since_contact}d ago
                    </span>

                    <div className='flex gap-1 flex-wrap'>
                        {
                            friend.tags.map((tag, index) =>
                                <span key={index} className='badge badge-soft badge-success text-sm rounded-full'>
                                    {tag}
                                </span>)
                        }
                    </div>

                    <span className={`text-white flex items-center px-3 font-semibold rounded-full
                        ${friend.status === "overdue" 
                        ? "bg-red-500" 
                        : friend.status === "almost due" 
                        ? "bg-yellow-500" 
                        : "bg-green-800" }`}>
                            {friend.status}
                    </span>

                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;