"use client"

import { BottomNav } from "@/components/bottom-nav";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function layout({children}: {children: ReactNode}) {
  return (
		<div className="min-h-screen">
          <div className="pb-20">
              <Header/>
              {children}
          </div>
			<BottomNav />
		</div>
	);
}
