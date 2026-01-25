import React from 'react'
import { HamburgerMenu } from './hamburger-menu';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const  Header = () => {
  return (
		<header className="flex w-full flex-col px-2 py-2">
			<div className="flex w-full justify-between items-center">
				<Link href="/">
					<div className="h-12 relative w-12 overflow-hidden">
						<Image
							fill
							src="/images/excel-logo.png"
							alt="logo"
							className="object-cover"
						/>
					</div>
				</Link>

				<div className="flex flex-col leading-3">
					<h4 className="text-xl md:text-2xl uppercase text-[#4c0121] font-bold">
						Excelgrid Foundation School
					</h4>
					<p className="italic text-xs">Excellence through education...</p>
				</div>
			</div>
		</header>
	);
}
