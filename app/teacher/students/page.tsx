

import { EnrollStudent } from '../_components/enroll-student';
import { getActiveSession, getEnrolledStudents } from '@/lib/queries';
import { StudentsList } from '../_components/students-list';

export default async function EnrollPage() {

	const [session] = await getActiveSession() || []

	const students = await getEnrolledStudents(session.id) || []
  return (
		<div>
			<div className="flex  flex-col w-full">
				<div className="flex justify-between">
					<h4>Enroll New Student</h4>
				  {session ? <EnrollStudent session={session} />:"Loading..."}
				</div>
			  {students ? <StudentsList session={session} students={students} />: "Nothing to see here"}
			</div>
		</div>
	);
}
