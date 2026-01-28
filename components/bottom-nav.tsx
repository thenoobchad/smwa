"use client"
import React, { ReactNode, useState } from 'react'
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
				<NavItem icon={<User />} label="Profile" path="/teacher/classes" active />
			</div>
		</nav>
	);
}

const NavItem = ({
	icon,
	label,
	active=false,
	path
}: {
	icon: ReactNode;
	label: string;
	active: boolean;
	path: string
}) => {


	const handleClick = (active: boolean) => {

	}
	return (
		<button
			
			className={`flex flex-col items-center cursor-pointer justify-center w-full h-full ${active  ? "text-white" : "text-gray-600"}`}>
			<Link href={path}>{icon}</Link>
			<span>{label}</span>
		</button>
	)
};