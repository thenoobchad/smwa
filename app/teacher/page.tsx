import { Header } from '@/components/header'
import { ArrowUpRight, AxeIcon, BookAlert, ChartArea, DatabaseBackup, Inspect, ListCheck, User2, Users2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function TeachersPage() {
  return (
		<div className="p-2">
			
			<div className="flex flex-col gap-2 w-full">
				<div className="w-full flex gap-1 flex-col pb-2 ">
					<h4 className="text-2xl pt-2">
						Welcome to the Teachers Board
					</h4>
					<p className='text-sm text-zinc-500'>Track real-timme school statistics and key performance metrics</p>
				</div>
				<div className="grid grid-cols-2 gap-3">
					<div className="border border-zinc-200 items-center p-4 flex gap-4">
						<div className="text-fuchsia-700 bg-fuchsia-100 h-12 w-12 flex items-center justify-center">
							<Users2 />
						</div>
						<div>
							<h4 className="flex gap-2 items-center">
								Total Students <span></span>
							</h4>
							<h1>1</h1>
							<p className="text-sm text-zinc-500">1 with score entered</p>
						</div>
					</div>
					<div className="border border-zinc-200 items-center p-4 flex gap-4">
						<div className="text-red-700 bg-red-100 h-12 w-12 flex items-center justify-center">
							<ChartArea />
						</div>
						<div>
							<h4>Class Average</h4>
							<h1>68.8%</h1>
							<p className="text-sm text-zinc-500">Overall class performance</p>
						</div>
					</div>

					<div className="border border-zinc-200 items-center p-4 flex gap-4">
						<div className="text-yellow-700 bg-yellow-100 h-12 w-12 flex items-center justify-center">
							<BookAlert />
						</div>
						<div>
							<h4>Subjects</h4>
							<h1>8</h1>
							<p className="text-sm text-zinc-500">
								Standard subjects configured
							</p>
						</div>
				  </div>
				  <div className="border border-zinc-200 items-center p-4 flex gap-4">
					  <div className="text-green-700 bg-green-100 h-12 w-12 flex items-center justify-center">
						  <DatabaseBackup />
					  </div>
					  <div>
						  
						  <div className='flex gap-2 items-center'>
							  <h4 className='text-xl'>8+ </h4><span className='text-sm p-1 bg-zinc-100 flex gap-1'>28.4% <ArrowUpRight size={15} /></span></div>
						  <h4>Total Staffs</h4>
						
					  </div>
				  </div>
				</div>
			</div>
		</div>
	);
}
