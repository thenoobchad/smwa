"use client"

import { useState } from "react";

type StudentType = {
    id: string;
    firstName: string;
    lastName: string;
    admissionNumber: string;
    level: string;
} 

type StudentsEnrolledType = StudentType[]

export const StudentsList = ({ students }: { students: StudentsEnrolledType }) => {
    const [enrolledStudents, setEnrolledStudents] =useState(students)

  return (
		<div className="my-4">
			{enrolledStudents ?
				<table className="w-full">
					<thead className="text-left bg-gray-100">
						<tr>
							<th className="px-4 py-3 text-gray-900">Admission No.</th>
							<th>Full Name</th>
							<th>Current Level</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200">
						{enrolledStudents.map((student) => (
							<tr key={student.id}>
								<td className="px-4 py-3 text-gray-900">{student.admissionNumber}</td>
								<td>
									{student.firstName} {student.lastName}
								</td>
								<td>{student.level}</td>

								<td>
									<button className="bg-yellow-100 text-yellow-700 px-2 py-2 cursor-pointer">Enter Scores</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			:	<p>Nothing to see here</p>}
		</div>
	);
}
