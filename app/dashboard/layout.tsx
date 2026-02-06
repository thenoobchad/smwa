"use client"

import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function TeachersLayout({children}: {children: ReactNode}) {
  return (
		<div className="min-h-screen">
			<div className="pb-20">
				<Header />
				<div className="p-2">{children}</div>
			</div>
			<BottomNav />
		</div>
	);
}
