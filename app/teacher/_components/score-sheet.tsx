"use client"


import { saveAllScores } from "@/lib/actions";
import { useState, useTransition } from "react"

type InitialDataType = {
	
	subjectName: string;
	testScore: number;
	examScore: number;
	gradeId: string;
}[];

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

				<div className="grid grid-cols-3 w-full my-4 border-y border-zinc-400 py-2">
					<div>
						<p>Current Position</p>
						<p>
							1st <span>of 34</span>
						</p>
					</div>
					<div>
						<p>Grand Total</p>
						<p>765</p>
					</div>
					<div>
						<p>Average</p>
						<p>54.9</p>
					</div>
				</div>
			</div>
			<button
				onClick={handleSubmit}
				className="bg-blue-950 py-2 px-4 text-white mt-6">
				{isPending ? "Saving..." : "Save  Scores"}
			</button>
		</div>
	);
}
