"use server";

import { db } from "@/database/drizzzle";
import { academicSessions } from "@/database/schema";
import { and, eq, gte } from "drizzle-orm";
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
