import React from 'react'
import { HamburgerMenu } from './hamburger-menu';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const  Header = () => {
  return (
		<header className="flex w-full flex-col px-2 py-2 bg-blue-950">
			<div className="flex w-full justify-between items-center">
				<Link href="/">
					<div className="h-12 relative w-12 overflow-hidden">
						<Image
							fill
							src="/images/excel-logo1.png"
							alt="logo"
							className="object-cover"
						/>
					</div>
				</Link>

				<div className="flex gap-2 leading-3 items-center">
					<h4 className="text-xl md:text-2xl uppercase text-white font-bold">
						EFS
					</h4>
				  <p className="p-1 bg-blue-700 text-xs text-zinc-50">{new Date().toLocaleDateString()}</p>
				</div>
			</div>
		</header>
	);
}
