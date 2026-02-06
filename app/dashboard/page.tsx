
import { ArrowUpRight,  BookAlert, ChartArea, DatabaseBackup, Users2 } from 'lucide-react';

import { ChartView } from './_components/chart-view';
import {FaPeopleGroup} from "react-icons/fa6"
import { ImBooks, ImManWoman } from 'react-icons/im';
import { FaChalkboardTeacher } from 'react-icons/fa';

export default function DashboardPage() {
	return (
		<div className="p-2 bg-zinc-100">

			<div className="flex flex-col gap-2 w-full">
				<div className="w-full flex gap-1 flex-col pb-2 ">
					<h4 className="text-2xl pt-2">
						Welcome back, 
					</h4>
					<p className='text-sm text-zinc-500'>Track real-timme school statistics and key performance metrics</p>
				</div>
				<div className="grid grid-cols-2 gap-3 ">
					<div className=" bg-blue-500 items-center p-4 flex gap-4 rounded-md text-white">
						
						<div className='flex justify-between w-full items-center'>

							<div className='flex gap-2  flex-col'>
								<h4 className='text-3xl'>44 </h4>
							<h4>Students</h4>
</div>

							
								<FaPeopleGroup size={48} />
							
						</div>
					</div>


					<div className=" bg-green-600 items-center p-4 flex gap-4 rounded-md text-white">

						<div className='flex justify-between w-full items-center'>

							<div className='flex gap-2  flex-col'>
								<h4 className='text-3xl'>10 </h4>
								<h4>Parents</h4>
							</div>

							
								<ImManWoman size={48} />
							
						</div>
					</div>

					<div className=" bg-orange-500 items-center p-4 flex gap-4 rounded-md text-white">

						<div className='flex justify-between w-full items-center'>

							<div className='flex gap-2  flex-col'>
								<h4 className='text-3xl'>	12 </h4>
								<h4>Teachers</h4>
							</div>

							
								<FaChalkboardTeacher size={48} />
							
						</div>
					</div>
					<div className=" bg-purple-500 items-center p-4 flex gap-4 rounded-md text-white">

						<div className='flex justify-between w-full items-center'>

							<div className='flex gap-2  flex-col'>
								<h4 className='text-3xl'>15 </h4>
								<h4>Subjects</h4>
							</div>

							
								<ImBooks size={48} />

						
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
