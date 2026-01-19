"use client"

import { ChartNoAxesGantt, Folder, PersonStandingIcon, Phone, Users } from "lucide-react";

import { useState } from "react";

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
        icon: Folder
    },
];

export const HamburgerMenu = () => {

    const [isOpen, setIsOpen] = useState(true)
    return (
			<div className="relative">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="h-10 w-10 bg-blue-950 flex items-center justify-center flex-col space-y-1 relative z-999">
					<div
						className={`bg-white h-1 w-7 transition-all delay-150 ${isOpen ? "rotate-0" : "rotate-45 translate-y-1"}`}
					/>

					<div
						className={`bg-white h-1 w-7 transition-all delay-150 ${isOpen ? "rotate-0" : "-rotate-45 -translate-y-1"}`}
					/>
				</button>

				{!isOpen && (
					<div>
						<div
							className={`absolute top-0 p-3 pt-10 pb-4 right-0 bg-blue-950 w-[200px] transition-all delay-150 ${!isOpen ? "translate-x-0" : "translate-x-[100%]"}`}>
							<ul className="text-white space-y-4 ">
								{menuList.map((menuItem, i) => (
									<li
										key={i}
										className="capitalize flex gap-2 items-center border-b blue-pink-900">
										<menuItem.icon size={18} />
										{menuItem.title}
									</li>
								))}
								<p className="flex text-xs gap-2 flex-col">
									<span className="flex gap-2">
										<Phone size={15} />
										Contact Admin:
									</span>
									<span>+234 806 815 66 22</span>
								</p>
							</ul>
						</div>
					</div>
				)}
			</div>
		);
}
