const dbmsid = "68cc3bcdc97fee5c30e31905";
const osid="68cc3c4574c84bf6aedc8bf8";
import Sem from "../models/semister.model.js";


const semdata =
{
  branch: "IT",
  year: 3,
  semester: "3-2",
  subjects: [dbmsid]
};

export default async function insertsem() {
  try {
    await Sem.create(semdata);
    console.log("✅ DBMS sem inserted successfully");
  } catch (error) {
    console.log(error);
    
  }
}

