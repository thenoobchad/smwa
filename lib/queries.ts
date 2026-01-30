"use server"

import { db } from "@/database/drizzzle"
import { academicSessions, classes, enrollments, students } from "@/database/schema"
import { eq } from "drizzle-orm"


export async function getActiveSession() {

    try {
        const session = await db.select().from(academicSessions).where(eq(academicSessions.isCurrent, true)) 
        return session || []
    } catch (error) {
        console.error(error)
        return MOCK_DATA
    }
    

}

const MOCK_DATA = [
    {
    id: "1234",
    name: "2024/2025",
    isCurrent: false,
    term: "first" as "first" | "second" | "third"
    }
]

export async function getEnrolledStudents(sessionId:string) {
    return await db.selectDistinct({
        id: students.id,
        firstName: students.firstName,
        lastName: students.lastName,
        admissionNumber: students.admissionNumber,
        level: classes.name
    }).from(students)
        .innerJoin(enrollments, eq(students.id, enrollments.studentId))
        .innerJoin(classes, eq(enrollments.classId, classes.id))
    .where(eq(enrollments.sessionId, sessionId))
}