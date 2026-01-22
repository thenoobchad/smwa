import { BookAlert, LayoutDashboard, Settings, Users } from "lucide-react";


export default function AdminPage() {
  return (
		<main className="h-screen w-full ">
			<div className="h-full w-full flex flex-col sm:flex-row-reverse">
				<section className="flex-1">the page is here</section>
				<MenuNavs />
			</div>
		</main>
	);
}

const MenuNavs = () => {
    return (
			<div className="flex w-full h-fit sm:h-full mt-auto sm:flex-col sm:w-[20vw] lg:w-[15vw] sm:py-2 bg-zinc-800 text-white">
				{menuItems.map((item, i) => (
					<div
						key={i}
						className="flex sm:justify-start  items-center px-4 w-full sm:gap-4 flex-col sm:flex-row border-x border-zinc-700 sm:border-none py-4 sm:py-0">
						<item.icons size={15} />
                        <span className="capitalize text-sm mt-2 sm:mt-0">
                            {item.name}
                        </span>
					</div>
				))}
			</div>
		);
}


const menuItems = [
	{
		name: "settings",
		icons: Settings,
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
		name: "reports",
		icons: BookAlert,
	},
];