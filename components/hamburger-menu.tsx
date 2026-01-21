"use client";

import {
	ChartNoAxesGantt,
	ChevronDown,
	ChevronRight,
	Folder,
	PersonStandingIcon,
	Phone,
	Users,
	X,
} from "lucide-react";
import Link from "next/link";

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
		submenu: [
			{
				title: "jss 1",
				href: "jss1",
			},
			{
				title: "jss 2",
				href: "jss2",
			},
			{
				title: "jss 3",
				href: "jss3",
			},
		],
	},
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
					className={`fixed z-990 top-0 p-6 pt-4 pb-4 right-0 bg-blue-950 h-dvh w-[60vw] sm:w-[40vw] md:w-[30vw] transition-all delay-150 ${isOpen ? "translate-x-0" : "translate-x-[200%]"}`}>
					<ul className="text-white h-full space-y-4">
						<button onClick={() => setIsOpen(false)}>
							<X />
						</button>
						{menuList.map((menuItem, i) => {
							if (menuItem.submenu) {
								return (
									<div key={i} className="flex flex-col gap-2 w-full ">
										<li
											onClick={() => setIsSubActive(!isSubActive)}
											className=" bg-blue-600/10  capitalize p-1 flex gap-3 items-center  blue-pink-900 cursor-pointer">
											<menuItem.icon size={18} />
											{menuItem.title}
											<span className="ml-auto">{isSubActive ? <ChevronDown size={18}/> :<ChevronRight size={18} />}</span>
										</li>
										{isSubActive && (
											<ul className="ml-7  flex flex-col gap-2">
												{menuItem.submenu?.map((nav) => (
													<Link href={`/class/${nav.href}`} className="uppercase" key={nav.href}>
														{nav.title}
													</Link>
												))}
											</ul>
										)}
									</div>
								);
							} else {
								return (
									<li
										key={i}
										onClick={() => setIsSubActive(!isSubActive)}
										className="bg-blue-600/10 capitalize p-1 flex gap-3 items-center  blue-pink-900 cursor-pointer">
										<menuItem.icon size={18} />
										{menuItem.title}
									</li>
								);
							}
						})}
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
