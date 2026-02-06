"use client";

import {
	
	LayoutDashboard,
	LogIn,
	
	X,
} from "lucide-react";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

const menuList = [
	{
		title: "dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Sign in",
		icon: LogIn,
	}

];

export const HamburgerMenu = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	const [isSubActive, setIsSubActive] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	return (
		<div className="sticky z-999 top-0 right-0">
			<button
				onClick={() => setIsOpen(true)}
				className="h-10 w-10 bg-[#4c0121] flex items-center justify-center flex-col space-y-1 z-99 ">
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
					className={`absolute z-990 top-0 p-4 pt-2 pb-2 right-0 bg-[#4c0121] transition-all delay-150 ${isOpen ? "translate-x-0" : "translate-x-[200%]"}`}>
					<div className="w-full text-white py-1 flex items-start">
						<button onClick={() => setIsOpen(false)} className="">
							<X />
						</button>
					</div>
					<ul className="text-white h-full  space-y-4 flex flex-col">
						
						{menuList.map((menuItem, i) => {
								return (
									<div key={i} className="flex flex-col gap-2 w-full ">
										<Link href={`/${menuItem.title}`}>
										<li
											onClick={() => setIsSubActive(!isSubActive)}
											className="   capitalize p-1 flex gap-3 items-center  blue-pink-900 cursor-pointer underline">
											<menuItem.icon size={18} />
											{menuItem.title}
										
											</li>
										</Link>
										
									</div>
								)
							
							
						
						})}
		
					</ul>
				</div>
			)}
		</div>
	);
};
