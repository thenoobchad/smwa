ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_student_id_class_id_session_id_term_unique";--> statement-breakpoint
ALTER TABLE "academic_sessions" ALTER COLUMN "is_current" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "academic_sessions" ADD COLUMN "term" "term" NOT NULL;--> statement-breakpoint
ALTER TABLE "enrollments" DROP COLUMN "term";--> statement-breakpoint
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_student_id_class_id_session_id_unique" UNIQUE("student_id","class_id","session_id");