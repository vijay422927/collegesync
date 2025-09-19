
import subject from "../models/subject.model.js";
const dbmsSubject = {
  subjectName: "OS",
  branch: "IT",
  year: 3,
  semester: "3-2",
  oldpapers: [
    {
      quetion: "http://115.241.205.5/wbc/sessionals/2nd_btech_2023-24_CSE_DBMS_ses-Q1.pdf",
      key: "http://115.241.205.5/wbc/sessionals/2nd_btech_2023-24_CSE_DBMS_ses-K1.pdf"
    }
  ],
  cos: [
    {
      co: "CO1",
      quetions: [
        {
          difficulty: "high",
          quetion: "Explain normalization up to BCNF with examples.",
          answer: "Normalization reduces redundancy and anomalies. \
Consider a table with StudentID, StudentName, CourseID, CourseName... \
<img src='https://example.com/dbms-co1-q1.png' /> \
After normalization, we separate it into Student and Enrollment tables."
        },
        {
          difficulty: "medium",
          quetion: "Differentiate between Primary Key and Candidate Key.",
          answer: "Primary key uniquely identifies a record. Candidate keys are possible choices for primary key."
        },
        {
          difficulty: "easy",
          quetion: "What is a Database?",
          answer: "A database is an organized collection of data, generally stored and accessed electronically."
        }
      ]
    },
    {
      co: "CO2",
      quetions: [
        {
          difficulty: "high",
          quetion: "Explain ACID properties in DBMS with examples.",
          answer: "ACID ensures reliable transactions: Atomicity, Consistency, Isolation, Durability. \
<img src='https://example.com/dbms-co2-high.png' />"
        },
        {
          difficulty: "medium",
          quetion: "What is a transaction?",
          answer: "A transaction is a single unit of work that is either fully completed or fully failed."
        },
        {
          difficulty: "easy",
          quetion: "Expand DBMS.",
          answer: "Database Management System."
        }
      ]
    },
    {
      co: "CO3",
      quetions: [
        {
          difficulty: "high",
          quetion: "Explain ER model with a diagram.",
          answer: "ER model represents entities and relationships. \
<img src='https://example.com/dbms-co3-high.png' />"
        },
        {
          difficulty: "medium",
          quetion: "What is a weak entity?",
          answer: "An entity that cannot be uniquely identified by its attributes alone."
        },
        {
          difficulty: "easy",
          quetion: "What does ER stand for?",
          answer: "Entity-Relationship."
        }
      ]
    },
    {
      co: "CO4",
      quetions: [
        {
          difficulty: "high",
          quetion: "Explain indexing in DBMS and its types.",
          answer: "Indexing improves retrieval speed. Types include clustered and non-clustered indexes. \
<img src='https://example.com/dbms-co4-high.png' />"
        },
        {
          difficulty: "medium",
          quetion: "What is a clustered index?",
          answer: "Clustered index determines the physical order of data in a table."
        },
        {
          difficulty: "easy",
          quetion: "What is an index?",
          answer: "A data structure that improves data retrieval speed."
        }
      ]
    },
    {
      co: "CO5",
      quetions: [
        {
          difficulty: "high",
          quetion: "Discuss concurrency control techniques.",
          answer: "Concurrency control ensures correct transaction execution. Techniques: lock-based, timestamp, multiversion. \
<img src='https://example.com/dbms-co5-high.png' />"
        },
        {
          difficulty: "medium",
          quetion: "What is deadlock?",
          answer: "Deadlock occurs when two transactions wait indefinitely for each other's locked resources."
        },
        {
          difficulty: "easy",
          quetion: "Define concurrency.",
          answer: "Ability to execute multiple transactions simultaneously."
        }
      ]
    },
    {
      co: "CO6",
      quetions: [
        {
          difficulty: "high",
          quetion: "Explain recovery techniques in DBMS.",
          answer: "Recovery restores DB after failure: log-based, shadow paging, checkpointing. \
<img src='https://example.com/dbms-co6-high.png' />"
        },
        {
          difficulty: "medium",
          quetion: "What is checkpoint?",
          answer: "Checkpoint saves the database state to reduce recovery time."
        },
        {
          difficulty: "easy",
          quetion: "What is database recovery?",
          answer: "Process of restoring database to a correct state after failure."
        }
      ]
    }
  ],
  cheatsheet: "https://example.com/dbms-cheatsheet.pdf",
  notes: [
    "file:///C:/Users/vijay/Downloads/Strategies_and_Challenges_for_Unmanned_Aerial_Vehicle-Based_Continuous_Inspection_and_Predictive_Maintenance_of_Solar_Modules.pdf"
  ],
  videos: ["https://www.youtube.com/watch?v=3s0lFtUrhSQ"]
};

export default async function insertDBMSSubject() {
  try {
    await subject.create(dbmsSubject);
    console.log("✅ DBMS subject inserted successfully");
  } catch (err) {
    console.error("❌ Error inserting DBMS subject:", err);
  }
}
