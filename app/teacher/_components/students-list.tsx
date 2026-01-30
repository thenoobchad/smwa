"use client";

import { useEffect, useState } from "react";

import { getStudentGrades } from "@/lib/actions";
import Link from "next/link";

type StudentType = {
	id: string;
	firstName: string;
	lastName: string;
	admissionNumber: string;
	level: string;
};

type SessionType = {
	id: string;
	name: string;
	term: string;
};

type InitialDataType = {
	gradeId: string;
	subjectName: string;
	testScore: number;
	examScore: number;
	
}[];

type StudentsEnrolledType = StudentType[];

export const StudentsList = ({
	students,
	session,
}: {
	students: StudentsEnrolledType;
	session: SessionType;
}) => {
	const [enrolledStudents, setEnrolledStudents] = useState(students);
	

	useEffect(() => {
		async function updateList() {
			setEnrolledStudents(students);
		}

		updateList();
	}, [students]);

	
	
	return (
		<div className="my-4 text-sm">
			{enrolledStudents ?
				<table className="w-full">
					<thead className="text-left bg-gray-100">
						<tr>
							<th>S/N</th>
							<th className="px-4 py-3 text-gray-900">Admission No.</th>
							<th>Full Name</th>
							<th>Current Level</th>
							<th>Meta Data</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-200 w-full">
						
						{enrolledStudents.map((student, i) => (
							<StudentTable key={student.id} student={student} i={i} />
							
						))}
					</tbody>
				</table>
			:	<p>Nothing to see here</p>}
		</div>
	);
};


const StudentTable = ({
	student, i
}: {
	student: StudentType,
	i: number
}) => {
	
	const formatClassLevel = (level: string) => {
		switch (level) {
			case "JSS1":
				return "JSS 1";

			case "JSS2":
				return "JSS 2";

			default:
				return "JSS 3";
		}
	};


	return (
		<tr >
			<td>{i+1}</td>
			<td className="px-4 py-3 text-gray-900">{student.admissionNumber}</td>
			<td>
				<p className="capitalize whitespace-nowrap">
					{student.firstName} {student.lastName}
				</p>
			</td>
			<td>{formatClassLevel(student.level)}</td>

			<td>
				<>
					<Link
						href={`/teacher/students/${student.id}`}
						className="text-blue-900 cursor-pointer text-sm">
						View Details
					</Link>
					
				</>
			</td>
		</tr>
	);
};