import React from 'react'
import logo from './../assets/logo-mandlacx.png'
import avatar from './../assets/avatar.png'
import { MdDashboard } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { MdSettingsApplications } from "react-icons/md";
import { RiAlertFill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
function Navbar() {
  return (
    <div className='flex h-5 w-full  flex-col md:flex-row justify-between items-center p-6  shadow-md'>
        <div className='flex items-center text-base mb-2 md:mb-0'>
            <img className='h-5 w-4 mr-2' src={logo}  alt="mandlacx" />
            <p>MANDLAC<span className='font-bold'>X</span></p>
        </div>
        <nav className='mb-2 md:mb-0'>
            <ul className='flex justify-between items-center'>
                <li><span className='flex py-2.5 px-3 items-center text-xs font-bold' href="/"><MdDashboard size={12} className='mr-2 text-[#ffcc00]' />Dashboard</span></li>
                <li><span className='flex py-2.5 px-3 items-center text-xs font-bold' href="/cameras"><BiSolidCctv size={12} className='mr-2' />Cameras</span></li>
                <li><span className='flex py-2.5 px-3 items-center text-xs font-bold' href="/scenes"><MdSettingsApplications size={12} className='mr-2' />Scenes</span></li>
                <li><span className='flex py-2.5 px-3 items-center text-xs font-bold' href="/incidents"><RiAlertFill size={12} className='mr-2' />Incidents</span></li>
                <li><span className='flex py-2.5 px-3 items-center text-xs font-bold' href="/users"><HiUsers size={12} className='mr-2' />Users</span></li>
            </ul>
        </nav>
        <div className='flex justify-center items-center p-2 space-x-2'>
            <img className='h-8' src={avatar} alt="avatar" />
            <div className=''>
                <p className='text-sm'>Mohammed Ajhas</p>
                <p className='text-xs'>ajhas@mandlac.com</p>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar