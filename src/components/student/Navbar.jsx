import React from 'react';
// import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const isCourseListPage = location.pathname.includes('/course-list');

    return (
        <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
            <img src="https://www.skillzen.com/w/v1.3/img/logo_and_name-white.png" alt="Logo" className='w-28 lg:w-32 cursor-pointer'/>
            <div className='hidden md:flex items-center gap-5 text-gray-500'>
                <div className='flex items-center gap-5'>
                    <button>Become Educator</button>
                    | <Link to='/my-enrollments'>My Enrollments</Link>
                </div>
                <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>
            </div>
            <div className='md:hidden'></div>
        </div>
    );
};

export default Navbar;