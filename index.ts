import { db } from "./database/drizzzle";
import { subjects } from "./database/schema";

const all_subjects = [
	"Mathematics",
	"English Language",
	"Basic Science",
	"Social Studies",
	"Home Economics",
	"Basic Technology",
	"Civic Education",
	"Physical and Health Education",
	"Religious Knowledge",
	"Creative and Cultural Arts",
	"Information and Communication Technology",
	"History",
	"Security Education",
    "Agricultural Science",
    
];
async function main() {
    for (const sub in all_subjects) {

        try {
            const subjectEntered = await db.insert(subjects).values({ name: all_subjects[sub] as string }).returning()
            
            console.log(subjectEntered)
        } catch (error) {
            console.error(error)
        }
      
    }
}

main().then(() => console.log("Entered data successfully")).catch((err) => console.error("Error inserting data", err))