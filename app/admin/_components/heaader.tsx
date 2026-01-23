import {
	BoxSelect,
	Building,
	FileExclamationPoint,
	LogOut,
	LucideHome,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<div className="w-full">
			<div className="w-full  justify-between h-10 items-center flex px-2">
				<Link href="/">
					<LogOut size={18}/>
				</Link>
			</div>
		</div>
	);
};
