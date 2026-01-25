"use client"
import React, { ReactNode } from 'react'
import {Home, Search, Bell, User, Plus} from "lucide-react"
import Link from 'next/link';

export const BottomNav = () => {
  return (
		<nav className="fixed sm:hidden bottom-0 left-0 right-0 bg-[#4c0121] border-t border-gray-200 px-4 pb-safe">
			<div className="h-16 flex justify-around items-center">
				<NavItem icon={<Home />} label="Home" path="/" active />
				<NavItem
					icon={<Plus />}
					label="Enroll"
					path="/teacher/students"
					active
				/>
				<NavItem icon={<Bell />} label="Alerts" path="" active />
				<NavItem icon={<User />} label="Profile" path="" active />
			</div>
		</nav>
	);
}

const NavItem = ({
	icon,
	label,
    active,
    path
}: {
	icon: ReactNode;
	label: string;
        active: boolean;
    path: string
}) => (
	<button
		className={`flex flex-col items-center cursor-pointer justify-center w-full h-full ${active ? "text-white" : "text-gray-600"}`}>
		<Link href={path}>{icon}</Link>
		<span>{label}</span>
	</button>
);