// import { db } from "@/db";
// import { results, students } from "@/db/schema";
// import { eq, and, sql } from "drizzle-orm";

// export async function getStudentReportData(studentId: number, session: string) {
//   // 1. Get all subject scores for this student
//   const studentScores = await db.select()
//     .from(results)
//     .where(and(eq(results.studentId, studentId), eq(results.session, session)));

//   // 2. Get the "Class Rank"
//   // We sum scores for all students in the same class to find the order
//   const rankings = await db.select({
//     id: results.studentId,
//     total: sql<number>`sum(${results.totalScore})`,
//     rank: sql`rank() over (order by sum(${results.totalScore}) desc)`
//   })
//   .from(results)
//   .where(eq(results.session, session))
//   .groupBy(results.studentId);

//   const myRank = rankings.find(r => r.id === studentId);

//   return {
//     scores: studentScores,
//     position: myRank?.rank || "N/A",
//     totalClass: rankings.length
//   };