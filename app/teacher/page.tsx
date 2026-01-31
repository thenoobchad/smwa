
import { ArrowUpRight,  BookAlert, ChartArea, DatabaseBackup, Users2 } from 'lucide-react';

import { ChartView } from './_components/chart-view';

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

							<div className='flex gap-2 items-center'>
								<h4 className='text-xl'>58+ </h4><span className='text-sm p-1 bg-zinc-100 flex gap-1'>28.4% <ArrowUpRight size={15} /></span></div>
							<h4>Total Students</h4>

						</div>
					</div>
					<div className="border border-zinc-200 items-center p-4 flex gap-4">
						<div className="text-red-700 bg-red-100 h-12 w-12 flex items-center justify-center">
							<ChartArea />
						</div>
						<div>

							<div className='flex gap-2 items-center'>
								<h4 className='text-xl'>87.3+ </h4><span className='text-sm p-1 bg-zinc-100 flex gap-1'>28.4% <ArrowUpRight size={15} /></span></div>
							<h4>Class Average</h4>

						</div>
					</div>

					<div className="border border-zinc-200 items-center p-4 flex gap-4">
						<div className="text-yellow-700 bg-yellow-100 h-12 w-12 flex items-center justify-center">
							<BookAlert />
						</div>
						<div>

							<div className='flex gap-2 items-center'>
								<h4 className='text-xl'>15+ </h4><span className='text-sm p-1 bg-zinc-100 flex gap-1'>08.4% <ArrowUpRight size={15} /></span></div>
							<h4 className='text-zinc-500'>Total Subjects</h4>

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
				<div className='w-full py-4 flex items-center justify-center p-1'>
					<ChartView />
				</div>
			</div>
		</div>
	);
}
