"use server"

import { db } from "@/database/drizzzle"
import { academicSessions, classes, enrollments, students } from "@/database/schema"
import { eq } from "drizzle-orm"


export async function getActiveSession() {

    try {
        const session = await db.select().from(academicSessions).where(eq(academicSessions.isCurrent, true))

        if(!session) throw new Error("Error getting current session")
        return session || []
    } catch (err ) {
        console.error(err)
        
    }
    

}



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