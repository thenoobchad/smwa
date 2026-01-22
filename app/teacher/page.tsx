import { Header } from '@/components/header'
import React from 'react'

export default function TeachersPage() {
  return (
		<div className='p-2'>
			<Header />

			<div>
				<div className='w-full  bg-zinc-900 text-white p-4'>
					<h4>Welcome to the teachers board</h4>
					<p>Manage students scores and generate report card</p>
				</div>
				<div>
					<h4>Total Students</h4>
					<h1>1</h1>
					<p>1 with score entered</p>
				</div>
				<div>
					<h4>Class Average</h4>
					<h1>68.8%</h1>
					<p>Overall class performance</p>
				</div>

				<div>
					<h4>Subjects</h4>
					<h1>8</h1>
					<p>Standard subjects configured</p>
				</div>
			</div>
		</div>
	);
}
