import React from 'react'
import {assets} from '../assets/frontend_assets/assets.js'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} className='w-36' alt="" />

        <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
        </ul>


        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="search-icon"/>

            <div className='relative group'>
                    <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile-icon" />
                    <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
                        <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 border rounded w-36 bg-slate-100 border-black/50'>
                                <p className='cursor-pointer hover:text-black'>My profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
            </div>

            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart-icon" />
                <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                    10
                </p> 
            </Link>
        </div>
    </div>
  )
}

export default Navbar


//46:31 time stop after this we are creating responsive navbar