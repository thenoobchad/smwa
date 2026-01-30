import {boolean, integer, pgEnum, pgTable, text, timestamp, unique, uuid, varchar} from "drizzle-orm/pg-core"

export const termEnum = pgEnum("term", ["first", "second", "third"])


export const academicSessions = pgTable("academic_sessions", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name", { length: 50 }).notNull(),
	isCurrent: boolean("is_current").default(true),
	term: termEnum("term").notNull(),
});

export const students = pgTable("students", {
	id: uuid("id").primaryKey().defaultRandom(),
	firstName: varchar("first_name", { length: 100 }).notNull(),
	lastName: varchar("last_name", { length: 100 }).notNull(),
	admissionNumber: varchar("admission_number", {length:50}).unique().notNull(),
});

export const subjects = pgTable("subjects", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("subject", { length: 100 }).notNull(),
});

export const classes = pgTable("classes", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: varchar("name").notNull(),
	subjectId: uuid("subject_id")
		.references(() => subjects.id)
		.notNull(),
	sessionId: uuid("session_id")
		.references(() => academicSessions.id)
        .notNull(),
});

export const enrollments = pgTable("enrollments", {
    id: uuid("id").primaryKey().defaultRandom(),
    studentId: uuid("student_id").references(() => students.id, {onDelete: "cascade"}),
    classId: uuid("class_id").references(() => classes.id, {onDelete:"cascade"}),
    sessionId: uuid("session_id").references(() => academicSessions.id),
    status: varchar("status", { length: 20 }).default("active"),
    enrolledAt: timestamp("enrolled_at").defaultNow(),
    updatedAt:timestamp("updated_at").defaultNow().notNull()
},
   (table) => [unique().on(table.studentId,table.classId,table.sessionId)
	]
)

export const grades = pgTable("grades", {
	id: uuid("id").primaryKey().defaultRandom(),
	enrollmentId: uuid("enrollment_id")
		.notNull()
		.references(() => enrollments.id, { onDelete: "cascade" }),
	testScore: integer("test_score").default(0).notNull(),
	examScore: integer("exam_score").default(0).notNull(),
	totalScore: integer("total_score").default(0).notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull()
});


export const studentReport = pgTable("student_reports", {
	id: uuid("id").primaryKey().defaultRandom(),
	studentId: uuid("student_id")
		.notNull()
		.references(() => students.id),
	sessionId: uuid("session_id")
		.notNull()
		.references(() => academicSessions.id),
	
	
	punctuality: integer("punctuality").default(3),
	neatness: integer("neatness").default(3),
	honesty: integer("honesty").default(3),
	sport: integer("sport").default(3),

	teacherRemark: text("teacher_remark"),
	principalRemark: text("principal_remark"),
});

