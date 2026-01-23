import React from 'react'
import { SessionManager } from '../_components/session-manager'
import { AlertCircle } from 'lucide-react'

export default function SettingsPage() {
  return (
		<div className="p-1">
			<h1>School Configuration</h1>
			<div className="w-full flex flex-col gap-2">
				<h2>Academic Controls</h2>
				<div className=" bg-blue-100 items-center w-full flex gap-2 justify-center p-4">
					<AlertCircle size={18} className="text-blue-600" />{" "}
					<p className="text-center items-center  text-sm text-blue-600">
						Changing these settings will update the enrollment context for all
						teachers.
					</p>
				</div>

        <SessionManager />
        <h4 className='text-sm'>Session Details: <span>2024/2025 First Term </span><span className='text-[10px] bg-green-100 p-1 px-2 text-green-700'>ACTIVE</span></h4>
			</div>
		</div>
	);
}
