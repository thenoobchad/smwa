"use client";

import {
	ChartNoAxesGantt,
	Folder,
	PersonStandingIcon,
	Phone,
	Users,
	X,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

const menuList = [
	{
		title: "teacher",
		icon: PersonStandingIcon,
	},
	{
		title: "students",
		icon: Users,
	},
	{
		title: "sessions",
		icon: ChartNoAxesGantt,
	},
	{
		title: "class",
		icon: Folder,
	},
];

export const HamburgerMenu = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen]);

	
	return (
		<div className="sticky top-0 right-0">
			<button 
				onClick={() => setIsOpen(true)}
				className="h-10 w-10 bg-blue-950 flex items-center justify-center flex-col space-y-1 z-99 ">
				<div
					className={`bg-white h-1 w-7 transition-all delay-150 ${!isOpen ? "rotate-0" : "rotate-45 translate-y-1"}`}
				/>

				<div
					className={`bg-white h-1 w-7 transition-all delay-150 ${!isOpen ? "rotate-0" : "-rotate-45 -translate-y-1"}`}
				/>
			</button>

			{isOpen && (
				<div
					ref={menuRef}
					className={`absolute z-990 top-0 p-3 pt-4 pb-4 right-0 bg-blue-950 h-dvh w-70 transition-all delay-150 ${isOpen ? "translate-x-0" : "translate-x-[200%]"}`}>
					<ul className="text-white h-full space-y-4 ">
						<button onClick={() => setIsOpen(false)}>
							<X />
						</button>
						{menuList.map((menuItem, i) => (
							<li
								key={i}
								className="capitalize flex gap-2 items-center border-b blue-pink-900">
								<menuItem.icon size={18} />
								{menuItem.title}
							</li>
						))}
						<p className="flex mt-auto text-xs gap-2 flex-col">
							<span className="flex gap-2">
								<Phone size={15} />
								Contact Admin:
							</span>
							<span>+234 806 815 66 22</span>
						</p>
					</ul>
				</div>
			)}
		</div>
	);
};
