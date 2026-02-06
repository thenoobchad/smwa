import { ScoreSheet } from "@/app/dashboard/_components/score-sheet"
import { db } from "@/database/drizzzle"
import { students } from "@/database/schema"

import { getStudentGrades } from "@/lib/actions"
import { getActiveSession } from "@/lib/queries"
import { eq } from "drizzle-orm"


export default async function StudentScore({ params }: {params: Promise<{ studentId: string }> }) {
  const { studentId } = await  params
  const session = await getActiveSession()
  if (!session || session.length === 0) return

  const activeSession = session[0]
  const [student] = await db.select().from(students).where(eq(students.id, studentId))

  const gradesData = await getStudentGrades(studentId, activeSession.term)
  return (
		<div>
			<header>
				<h1>
					Entry for <span className="capitalize">{activeSession.term}</span> Term
        </h1>
        <p>Session: <span>{activeSession.name}</span></p>
        <h4 className="py-2 capitalize">Student: {student.lastName} {student.firstName}</h4>
      </header>
      
      <ScoreSheet initialData={gradesData} />
		</div>
	);
}
