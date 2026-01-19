"use server"
// import { db } from "@/db";
// import { students } from "@/db/schema";
import { redirect } from "next/navigation";

// const studentsTable = db.table("students");

export async function enrollStudent(formData: FormData) {
  const name = formData.get("name") as string;
  const currentClass = formData.get("currentClass") as string;

  // Create a unique student ID automatically (e.g., SCH-2024-001)
  const studentId = `SCH-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`;

//   await db.insert(students).values({
//     name,
//     studentId,
//     currentClass,
//   });

  // Redirect back to the upload page so you can start grading
  redirect("/dashboard/teacher/upload");
}

