import React from 'react'
import { SessionManager } from '../_components/session-manager'
import { AlertCircle } from 'lucide-react'
import { getActiveSession } from '@/lib/queries';

export default async function SettingsPage() {

	const [session] = await getActiveSession() || []

  return (
		<div className="p-2">
			<h1 className='text-md mb-2'>School Configuration</h1>
			<div className="w-full flex flex-col gap-2">
				<h2 className='text-sm text-zinc-600'>Academic Controls</h2>
				<div className=" bg-blue-100  w-full flex gap-2  p-4">
					<AlertCircle  className="text-blue-600" />{" "}
					<p className="text-center items-center  text-sm text-blue-600">
						Changing these settings will update the enrollment context for all
						teachers.
					</p>
				</div>

        <SessionManager />
			  {session.name && <h4 className='text-sm flex gap-2'>Session Details: <span className='capitalize'>{session.name} {session.term} Term</span><span className='text-[10px] bg-green-100 p-1 px-2 text-green-700'>ACTIVE</span></h4>}
			</div>
		</div>
	);
}
