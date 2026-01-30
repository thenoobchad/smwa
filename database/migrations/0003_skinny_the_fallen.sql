CREATE TABLE "student_reports" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"student_id" uuid NOT NULL,
	"session_id" uuid NOT NULL,
	"punctuality" integer DEFAULT 3,
	"neatness" integer DEFAULT 3,
	"honesty" integer DEFAULT 3,
	"sport" integer DEFAULT 3,
	"teacher_remark" text,
	"principal_remark" text
);
--> statement-breakpoint
ALTER TABLE "student_reports" ADD CONSTRAINT "student_reports_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "student_reports" ADD CONSTRAINT "student_reports_session_id_academic_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."academic_sessions"("id") ON DELETE no action ON UPDATE no action;