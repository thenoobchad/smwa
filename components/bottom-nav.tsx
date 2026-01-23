"use client"
import React, { ReactNode } from 'react'
import {Home, Search, Bell, User} from "lucide-react"

export const BottomNav = () => {
  return (
		<nav className='fixed sm:hidden bottom-0 left-0 right-0 bg-blue-950 border-t border-gray-200 px-4 pb-safe'>
			<div className='h-16 flex justify-around items-center'>
				<NavItem icon={<Home />} label="Home" active />
				<NavItem icon={<Search />} label="Explore" active />
				<NavItem icon={<Bell />} label="Alerts" active />
				<NavItem icon={<User />} label="Profile" active />
			</div>
		</nav>
	);
}

const NavItem = ({ icon, label, active }: {icon: ReactNode, label:string, active:boolean}) => (
    <button className={`flex flex-col items-center justify-center w-full h-full ${active ? 'text-blue-100':'text-gray-600'}`}>
        {icon}
        <span>{label}</span>
    </button>
)