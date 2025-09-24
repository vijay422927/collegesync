import { Apierror } from "../utils/Apierror.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Asynchanler } from "../utils/Asynchhandler.js";
import Sem from "../models/semister.model.js";
import Subject from "../models/subject.model.js";

const search_semister = Asynchanler(async (req, res) => {
    try {
        const { branch, year } = req.user;
        if (!branch || !year) {
            throw new Apierror(404, "requirements not found");
        }
        const semWise = await Sem.find({ branch, year }).populate("subjects");
        console.log(semWise);


        if (!semWise) {
            throw new Apierror(409, "invalid requirements");
        }

        const result = semWise.map((sem) => ({
            sem: sem.semester,
            subjects: sem.subjects.map((sub) => ({
                
                id: sub._id,
                name: sub.subjectName
               
            }))
        }));

        res.status(200).json
            (new Apiresponse(200, { result }, "fetched suddecfully"));


    } catch (error) {
        console.log(error);

    }
});


const sem_s = Asynchanler(async (req, res) => {
    const subjectId = req.query.id;
    console.log(subjectId);
    
    if (!subjectId) {
        throw new Apierror(404, "all are rquired");
    }

    const result = await Subject.findById(subjectId);
    if(!result)
    {
        throw new Apierror(404,"in db not found");
    }
   console.log(result);
   
    res.status(200).json(

        new Apiresponse(200, result, "fetched succesfully")

    );


})
export { search_semister, sem_s };
