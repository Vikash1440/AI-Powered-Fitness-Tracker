import React from 'react'
import { Link, NavLink } from 'react-router-dom';
// import { NavbarMenu } from '../../NavData/NavData'
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className=' fixed top-0 left-0 w-full bg-white  shadow-md z-50'>
        <div className="container flex justify-between items-center py-0 ">
          {/* logo section */}
          <div className='text-2xl flex items-center gap-2 font-bold py-8 '>
            <FaDumbbell />
            <p>AI</p>
            <p className='text-secondary'>FitTrack</p>
          </div>
          {/* menu section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-gray-600'>


              <li>
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>

                    `${isActive ? "text-primary" : ""}
                                  inline-block py-1 px-3 hover:text-primary font-semibold`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/CalculateBMI"
                  className={({ isActive }) =>


                    `${isActive ? "text-primary" : ""}
                                  inline-block py-1 px-3 hover:text-primary font-semibold`
                  }
                >
                 CalculateBMI
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AIsuggestion"
                  className={({ isActive }) =>


                    `${isActive ? "text-primary" : ""}
                                  inline-block py-1 px-3 hover:text-primary font-semibold`
                  }
                >
                 AIsuggestion
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/UserDasboard"
                  className={({ isActive }) =>


                    `${isActive ? "text-primary" : ""}
                                  inline-block py-1 px-3 hover:text-primary font-semibold`
                  }
                >
                 UserDasboard
                </NavLink>
              </li>

            </ul>
          </div>
          {/* icon section */}
          <div className='flex items-center gap-4 '>
            {/* <button className='text-2xl hover:bg-primary
                 hover:text-white rounded-full p-2 duration-200 '>
                    <CiSearch/>
                </button>
                <button className='text-2xl hover:bg-primary
                 hover:text-white rounded-full p-2 duration-200 '>
                   <PiShoppingCartThin/>
                </button> */}
            <button className='hover:bg-primary text-primary 
                font-semibold hover:text-white rounded-md border-2 
                border-primary px-6 py-2 duration-200 hidden md:block'>
              Login
            </button>
          </div>
          {/* mobile hamburger section */}
          <div className='md:hidden' onClick={() =>
            setOpen(!open)
          }>
            <MdMenu className='text-4xl' />
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar
