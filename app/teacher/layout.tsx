"use client"

import { BottomNav } from "@/components/bottom-nav";
import { ReactNode } from "react";

export default function layout({children}: {children: ReactNode}) {
  return (
		<div className="min-h-screen">
			<div className="pb-20">{children}</div>
			<BottomNav />
		</div>
	);
}
