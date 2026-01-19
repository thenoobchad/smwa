

// import { db } from "@/db";
// import { students } from "@/db/schema";
import Link from "next/link";

export default async function StudentListPage() {
	// const allStudents = await db.select().from(students);

  const allStudents = [
		{ id: 1, name: "John Doe", studentId: "SCH-2024-001", currentClass: "JSS1" },
		{ id: 2, name: "Jane Smith", studentId: "SCH-2024-002", currentClass: "JSS2" },
		{ id: 3, name: "Alice Johnson", studentId: "SCH-2024-003", currentClass: "JSS3" },
		{ id: 4, name: "Bob Brown", studentId: "SCH-2024-004", currentClass: "JSS1" },
	];

	return (
		<div className="p-8">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Registered Students</h1>
				<Link
					href="/dashboard/teacher/students/new"
					className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
					+ Enroll New Student
				</Link>
			</div>

			<div className="bg-white rounded-xl shadow-sm border overflow-hidden">
				<table className="w-full text-left">
					<thead className="bg-gray-50 border-b">
						<tr>
							<th className="p-4 font-semibold text-gray-600">Student Name</th>
							<th className="p-4 font-semibold text-gray-600">Student ID</th>
							<th className="p-4 font-semibold text-gray-600">Class</th>
							<th className="p-4 font-semibold text-gray-600 text-right">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="divide-y">
						{allStudents.map((student) => (
							<tr key={student.id} className="hover:bg-gray-50 transition">
								<td className="p-4 font-medium">{student.name}</td>
								<td className="p-4 text-gray-500">{student.studentId}</td>
								<td className="p-4">
									<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">
										{student.currentClass}
									</span>
								</td>
								<td className="p-4 text-right">
									<Link
										href={`/dashboard/teacher/upload?studentId=${student.id}`}
										className="text-blue-600 hover:underline font-semibold">
										Enter Scores →
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}