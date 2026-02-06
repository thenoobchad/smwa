import { db } from "@/database/drizzzle"
import { students } from "@/database/schema"

import { eq, } from "drizzle-orm"

export default async function GradesCard({ params }: { params: Promise<{ studentId: string }> }) {

    const { studentId } = await params
    const [student] = await db.select({ studentAdmissionNumber: students.admissionNumber, studentName: students.firstName }).from(students).where(eq(students.id, studentId))

    return (
        <div>Details for: {student.studentName} ({student.studentAdmissionNumber})


            <p>
                Total: 
            </p>

        </div>
    )
}