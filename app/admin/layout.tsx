import React, { ReactNode } from 'react'
import { MenuNavigation } from './_components/menu-navigation';
import { Header } from './_components/heaader';

export default function layout({children}: {children: ReactNode}) {
  return (
		<div className="h-screen w-full flex flex-col sm:flex-row-reverse">
		  <div className="flex-1">
			  <Header/>
			  {children}
		  </div>
			<MenuNavigation />
		</div>
	);
}
