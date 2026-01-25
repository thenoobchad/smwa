import { ScoreSheet } from "@/app/teacher/_components/score-sheet"

import { getStudentGrades } from "@/lib/actions"
import { getActiveSession } from "@/lib/queries"


export default async function StudentScore({ params }: {params: Promise<{ studentId: string }> }) {
  const { studentId } = await  params

  const [session] = await getActiveSession()

  const gradesData = await getStudentGrades(studentId, session.term)
  return (
		<div>
			<header>
				<h1>
					Entry for <span className="capitalize">{session.term}</span> Term
        </h1>
        <p>Session: <span>{session.name}</span></p>
      </header>
      
      <ScoreSheet initialData={gradesData} />
		</div>
	);
}
