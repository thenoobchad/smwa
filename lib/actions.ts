"use server";

import { db } from "@/database/drizzzle";
import { academicSessions, classes, enrollments, grades, students, subjects } from "@/database/schema";
import { and, eq, } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createActiveSession(formData: FormData) {
	const session = formData
		.get("session")
		?.toString()
		.toLowerCase()
		.normalize()
		.trim();
	const term = formData
		.get("term")
		?.toString()
		.toLowerCase()
		.normalize()
		.trim();

	if (typeof session !== "string" || typeof term !== "string") {
		throw new Error("Insert required values!");
	}

	type Term = "first" | "second" | "third";
	if (!["first", "second", "third"].includes(term)) {
		throw new Error("Invalid term");
	}

	try {
		const existingSession = await db
			.select()
			.from(academicSessions)
			.where(
				and(
					eq(academicSessions.name, session),
					eq(academicSessions.term, term as Term),
				),
			);

		if (existingSession.length > 0) {
			return { success: false, message: "Data already exists." };
		}

		await db.batch([
			db.update(academicSessions).set({ isCurrent: false }),

			db.insert(academicSessions).values({
				name: session,
				term: term as Term,
				isCurrent: true,
			}),
		]);
		revalidatePath("/admin/settings");
		return { success: true };
	} catch (error) {
		console.error(error);
		return { success: false, message: "failed to create session" };
	}
}

export async function enrollStudent(formData: FormData) {
	
	const fullNameValue = formData.get("fullName");
	const levelValue = formData.get("class");
	const sessionIdValue = formData.get("session");
	const termValue = formData.get("term");

	if (
		typeof fullNameValue !== "string" ||
		typeof levelValue !== "string" ||
		typeof sessionIdValue !== "string"
	) {
		throw new Error("Enter complete details.");
	}

	const fullName = fullNameValue.trim();
	const level = levelValue.trim();
	const sessionId = sessionIdValue.trim();
	const term = typeof termValue === "string" ? termValue.trim() : undefined;

	
	const [firstName, ...rest] = fullName.split(/\s+/);
	const lastName = rest.join(" ");
	const admissionNum = `AD-${Date.now()}`;

	try {
		let levelClasses = await db
			.select()
			.from(classes)
			.where(and(eq(classes.name, level), eq(classes.sessionId, sessionId)));

		if (levelClasses.length === 0) {
			const allSubject = await db.select().from(subjects);

			if (allSubject.length > 0) {
				
			}
			const inserted = await db.insert(classes).values(
				allSubject.map((sub) => ({
					name: level,
					subjectId: sub.id,
					sessionId: sessionId
				}))
			).returning()

			levelClasses = inserted
		}

		const [newStudent] = await db.insert(students).values({
			firstName: firstName,
			lastName: lastName,
			admissionNumber: admissionNum
		}).returning()


		const enrollmentData = levelClasses.map(cls => ({
			id: crypto.randomUUID(),
			studentId: newStudent.id,
			classId: cls.id,
			sessionId: sessionId,
			term: term
		}))


		const gradeData = enrollmentData.map(enrol => ({
			enrollmentId: enrol.id,
			textScore: 0,
			examScore: 0,
			totalScore:0
		}))


		await db.batch([
			db.insert(enrollments).values(enrollmentData),
			db.insert(grades).values(gradeData)
		])

		revalidatePath("/teacher/enroll");
		return {success: true}
	
	} catch (error) {
		console.error(error);
		return { success: false, message: "failed to enroll student" };
	}
}



export async function getStudentGrades(studentId: string, term: string) { 
	console.log(term)
	return db.select({
		gradeId: grades.id,
		subjectName: subjects.name,
		testScore: grades.testScore,
		examScore: grades.examScore,
		sessionName: academicSessions.name,
		currentTerm: academicSessions.term
	}).from(grades)
		.innerJoin(enrollments, eq(grades.enrollmentId, enrollments.id))
		.innerJoin(classes, eq(enrollments.classId, classes.id))
		.innerJoin(subjects, eq(classes.subjectId, subjects.id))
		.innerJoin(academicSessions, eq(enrollments.sessionId, academicSessions.id))
		.where(and(
			eq(enrollments.studentId, studentId),
			eq(academicSessions.isCurrent, true),
			
	))
}

export async function saveAllScores(data: {gradeId: string, testScore: number, examScore: number}[]) { 
try {

	 if (!Array.isArray(data) || data.length === 0) {
			return { success: true };
	 }
	
	const updatedOperations = data.map((item) => db.update(grades).set({
		testScore: item.testScore,
		examScore: item.examScore,
		totalScore: item.testScore + item.examScore,
		updatedAt: new Date()
	}).where(eq(grades.id, item.gradeId))
	)

	await Promise.all(updatedOperations);
	
	revalidatePath("/teacher/students")
	return { success: true };
} catch (error) {
	console.error(error)
	 return {
			success: false,
			message: (error as Error)?.message ?? "Unknown error",
		};
}

} 