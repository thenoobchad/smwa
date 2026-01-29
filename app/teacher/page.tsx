import { Header } from '@/components/header'
import { BookAlert, ChartArea, ListCheck, User2, Users2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function TeachersPage() {
  return (
		<div className="p-2">
			
			<div className="flex flex-col gap-2 w-full">
				<div className="w-full flex gap-2 flex-col items-center">
					<h4 className="text-lg py-4 underline">
						Welcome to the Teachers Board
					</h4>
					<div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
					  <p className="bg-blue-100 text-blue-700 p-4 border border-blue-200 w-full lg:w-fit">Manage Students Scores and generate Report Cards</p>
					  <Link href="/teacher/classes" className='whitespace-nowrap text-sm underline flex gap-2'>View Results <ListCheck size={18} /></Link>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
				</div>
			</div>
		</div>
	);
}
