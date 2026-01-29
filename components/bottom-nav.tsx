"use client"
import React, { ReactNode, useState } from 'react'
import {Home, Search, Bell, User, Plus, LayoutGrid, Megaphone, HouseHeart, Subtitles, ChevronDown, FileSliders, FileBadge, Landmark, GraduationCap} from "lucide-react"
import Link from 'next/link';


const navItems = [
	{
		name: "View Results",
		icon: FileSliders
	},
	{
		name: "Student Information",
		icon: FileBadge
	},
	{
		name: "Classes",
		icon: Landmark
	},
	{
		name: "Courses",
		icon: GraduationCap
	},
]

export const BottomNav = () => {

	const [isActive, setIsActive] = useState(false)


	return (
	  <>
		<nav className="fixed  bottom-0 left-0 right-0 bg-blue-950 border-t border-gray-200 px-4 pb-safe">
			<div className="h-20 flex justify-around items-center">
				<NavItem icon={<HouseHeart />} label="Home" path="/" active />
				<NavItem
					icon={<Plus />}
					label="Student"
					path="/teacher/students"
					active
				/>
					<NavItem icon={<Megaphone />} label="Notice" path="" active />
					<button onClick={() => setIsActive(true)} className='flex flex-col gap-1 items-center cursor-pointer justify-center w-full h-full text-white '>
						<LayoutGrid />
						<p>Menu</p>
					</button>
				</div>
				
				<div className={`w-full p-3 left-0 bottom-0 absolute z-40 h-90 bg-white translate-y-full ${isActive && "translate-y-0!"} `}>
					<div className='flex items-center  justify-center p-1'><button onClick={() => setIsActive(false)}><ChevronDown /></button></div>
					<div className='grid grid-cols-4 gap-2'>
						{navItems.map((item, i) => (<div key={i}  className='flex flex-col items-center gap-2 border-2 border-blue-300 p-2 cursor-pointer'>
							<span className='h-12 w-12 flex items-center bg-blue-950 justify-center text-white'>

								<item.icon />
							</span>
							<p className='flex text-center text-xs '>{item.name}</p>
						</div>))}
					
					</div>
				</div>
			</nav>

			
		</>
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
			
			className={`flex flex-col gap-1 items-center cursor-pointer justify-center w-full h-full ${active  ? "text-white" : "text-gray-600"}`}>
			<Link href={path}>{icon}</Link>
			<span className='text-sm'>{label}</span>
		</button>
	)
};