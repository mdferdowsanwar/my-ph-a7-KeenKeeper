import React from 'react';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router';
import { RiHome2Line } from 'react-icons/ri';
import { CiClock2 } from 'react-icons/ci';
import { ImStatsDots } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className='py-4 border-b border-gray-200'>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row  justify-between items-center gap-3'>
                <div>
                    <a href="">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div>
                    <ul className='flex items-center gap-3 font-semibold'>
                        <li>
                            <NavLink to={"/"} className={({isActive}) => `flex items-center justify-center gap-1 px-3 py-1 rounded-sm ${isActive ? "bg-[#244D3F] text-white" : ""}`} >
                                <RiHome2Line /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/timeline"} className={({isActive}) => `flex items-center justify-center gap-1 px-3 py-1 rounded-sm ${isActive ? "bg-[#244D3F] text-white" : ""}`} >
                                <CiClock2 /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/stats"} className={({isActive}) => `flex items-center justify-center gap-1 px-3 py-1 rounded-sm ${isActive ? "bg-[#244D3F] text-white" : ""}`} >
                                <ImStatsDots /> Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;