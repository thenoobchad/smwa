"use client"


import { saveAllScores } from "@/lib/actions";
import { useState, useTransition } from "react"

type InitialDataType = {
	
	subjectName: string;
	testScore: number;
	examScore: number;
	gradeId: string;
}[];

const psychomotorSkills = ["punctuality", "neatness", "honesty", "sports"]

export const ScoreSheet = ({ initialData }: { initialData: InitialDataType }) => {
	const [rows, setRows] = useState(initialData)
	const [isPending, startTransition] = useTransition()

	const handleChange = (index: number, field: string, value: string) => {
		const numValue = Math.max(0, parseInt(value) || 0)
		setRows((prev) => {
			const updated = [...prev]
			updated[index] = { ...updated[index], [field]: numValue };
			return updated
		})
	 }
	
	const handleSubmit = () => {
		 startTransition(async () => {
			const result = await saveAllScores(rows)
			if(result.success) alert("All subjects updated")
		})
	}
	return (
		<div className=" bg-white pt-8 text-sm">
			<div className="p-2">

				<h4 className="text-lg font bold  mb-4">Subjects & Meta-Data</h4>

				<table className="bg-white w-full border-collapse">
					
					<thead className=" text-black border-y border-zinc-300">
						<tr className="text-left ">
							<th className="py-2">Subjects</th>
							<th className="p-3">
								<span className="flex whitespace-nowrap">Test(40)</span>
							</th>
							<th className="p-3 ">
								<span className="flex whitespace-nowrap">Exam (60)</span>
							</th>
							<th className="p-3 ">
								<span className="flex whitespace-nowrap">Total (100)</span>
							</th>
						</tr>
					</thead>

					<tbody className="divide-y p-2 divide-blue-100">
						{rows.map((row, index: number) => (
							<tr key={index}>
								<td className="w-full">{row?.subjectName}</td>
								<td>
									<input
										type="text"
										value={row.testScore}
										onChange={(e) =>
											handleChange(index, "testScore", e.target.value)
										}
										className="w-20 p-2 "
									/>
								</td>
								<td className="p-2 text-center">
									<input
										type="text"
										value={row.examScore}
										onChange={(e) =>
											handleChange(index, "examScore", e.target.value)
										}
										className="w-20 p-1 "
									/>
								</td>
								<td className="p-2 text-center">
									{row.testScore + row.examScore}
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className="mt-8 border-t pt-6">
					<h4 className="text-lg font bold  mb-4">Psychomotor & Affective Domain</h4>
					<div className="grid grid-cols-2 gap-4">
						{psychomotorSkills.map((skill) => (
							<div key={skill} className="flex items-center justify-between p-1 border">
								<span className="capitalize">{skill}</span>
								<select name="skill" id="" className="border p-1">
									{[1, 2, 3, 4, 5].map(num => (<option>{num}</option>))}
								</select>
	</div>
						))}
					</div>
				</div>
			</div>
			<button
				onClick={handleSubmit}
				className="bg-blue-950 py-2 px-4 text-white mt-6">
				{isPending ? "Saving..." : "Save and Update Scores"}
			</button>
		</div>
	);
}
