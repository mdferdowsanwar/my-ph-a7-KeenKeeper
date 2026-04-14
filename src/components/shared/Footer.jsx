import React from 'react';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import X from '../../assets/x.png';
import FooterLogo from '../../assets/logo-xl.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-gray-300'>
            <div className='w-9/12 mx-auto py-10 flex items-center justify-center flex-col gap-3'>
                <img src={FooterLogo} alt="" />
                <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='font-semibold text-white'>Social Links</p>
                <ul className='flex justify-center items-center gap-3'>
                    <li><Link to=""><img src={Facebook} alt="" /></Link></li>
                    <li><Link to="" ><img src={Instagram} alt="" /></Link></li>
                    <li><Link to=""><img src={X} alt="" /></Link></li>
                </ul>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-3 py-5 border-t border-gray-600 w-10/12 mx-auto'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex justify-between items-center gap-4'>
                    <li><Link to="">Privacy Policy</Link></li>
                    <li><Link to="">Terms of Service</Link></li>
                    <li><Link to="">Cookies</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;