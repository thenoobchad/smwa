import { BookAlert, Home, LayoutDashboard, Settings, Users } from "lucide-react";
import Link from "next/link";

export const MenuNavigation = () => {
	return (
		<div className="absolute bottom-0 sm:static flex w-full h-fit sm:h-full mt-auto sm:flex-col sm:w-[20vw] lg:w-[15vw] sm:py-2 bg-zinc-800 text-white sm:gap-4 sm:pt-14">
			{menuItems.map((item, i) => (
				<Link href={item.name === "home" ? "/admin" :`/admin/${item.name}`}
					key={i}
					className="flex sm:justify-start  items-center px-4 w-full sm:gap-4 flex-col sm:flex-row border-x border-zinc-700 sm:border-none py-4 sm:py-0">
					<item.icons size={15} />
					<span className="capitalize text-sm mt-2 sm:mt-0">{item.name}</span>
				</Link>
			))}
		</div>
	);
};

const menuItems = [
    {
		name: "home",
		icons: Home,
	},
	{
		name: "students",
		icons: LayoutDashboard,
	},
	{
		name: "class",
		icons: Users,
	},
	
	{
		name: "settings",
		icons: Settings,
	},
];
