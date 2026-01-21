import { Header } from '@/components/header'
import { StudentsList } from '@/components/students-list'
import React from 'react'

export default async function ClassPage({ params }: { params: Promise<{ classId: string }> }) {
    
    const { classId } = await params

    const className = (id: string) => {
        if (id === "jss1") return "JSS 1: Jade Scholars"
        if (id === "jss2") return "JSS 2: Sapharrie Explorers";
        if (id === "jss3") return "JSS 3: Pearl Elites";
    }
  return (
		<main className="p-2">
			<Header />
			<div className='flex flex-col gap-2'>
				<h4 className="text-center p-1 border-b border-zinc-300">
					Welcome to {className(classId)}
				</h4>
				<div className="flex gap-2">
					<div className="flex gap-2 p-2">
						<label htmlFor="session" className="flex whitespace-nowrap">
							Session Data:
						</label>

						<select name="session" id="session">
							<option>- Select session -</option>
							<option value="2025/2026">2025/2026</option>
							<option value="2024/2025">2024/2025</option>
							<option value="2023/2024">2023/2024</option>
						</select>
					</div>

					<div className="flex gap-2 p-2">
						<label htmlFor="session" className="flex whitespace-nowrap">
							Term Data:
						</label>

						<select name="session" id="session">
							<option> - Select term -</option>
							<option value="first">First Term</option>
							<option value="second">Second Term</option>
							<option value="third">Third Term</option>
						</select>
					</div>
				</div>
                <StudentsList />
			</div>
		</main>
	);
}
