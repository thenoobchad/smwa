"use server"

import { db } from "@/database/drizzzle"
import { academicSessions } from "@/database/schema"
import { eq } from "drizzle-orm"


export async function getActiveSession() {
    return await db.select().from(academicSessions).where(eq(academicSessions.isCurrent, true)) 

}