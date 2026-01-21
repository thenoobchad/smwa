import React from 'react'
import { HamburgerMenu } from './hamburger-menu';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export const  Header = () => {
  return (
		
			<header className="flex w-full flex-col px-2 py-2">
				<div className="flex w-full justify-between">
					<div className="h-12 relative w-12 overflow-hidden">
						<Image
							fill
							src="/images/excel-logo.png"
							alt="logo"
							className="object-cover"
						/>
					</div>

					<HamburgerMenu />
				</div>
			</header>
	
	);
}
