"use client";

type ScoreFormProps = {
	subjects: Array<{ id: number; name: string }>;
	students: Array<{ id: number; name: string }>;
};

export default function ScoreForm({ subjects, students }: ScoreFormProps) {
	return (
		<div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg">
			<h1 className="text-2xl font-bold mb-6 text-gray-800">
				Enter Student Scores
			</h1>

			{/* 1. Header: Selection */}
			<div className="flex gap-4 mb-8 bg-white p-4 shadow-sm rounded">
				<select className="flex-1 p-2 border rounded">
					<option>Select Student...</option>
					{students.map((s) => (
						<option key={s.id} value={s.id}>
							{s.name}
						</option>
					))}
				</select>
				<select className="p-2 border rounded">
					<option>2023/2024 Session</option>
				</select>
			</div>

			{/* 2. Body: The 8 Subjects */}
			<div className="bg-white rounded shadow-sm overflow-hidden">
				<table className="w-full">
					<thead className="bg-gray-800 text-white">
						<tr>
							<th className="p-3 text-left">Subject</th>
							<th className="p-3">Test (40)</th>
							<th className="p-3">Exam (60)</th>
						</tr>
					</thead>
					<tbody className="divide-y">
						{subjects.map((sub) => (
							<tr key={sub.id}>
								<td className="p-3 font-semibold">{sub.name}</td>
								<td className="p-3 text-center">
									<input type="number" className="w-20 border p-2 rounded" />
								</td>
								<td className="p-3 text-center">
									<input type="number" className="w-20 border p-2 rounded" />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<button className="w-full mt-6 bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 transition">
				Submit Report Card
			</button>
		</div>
	);
}
