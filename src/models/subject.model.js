
import mongoose from "mongoose";
import { Schema } from "mongoose";

const oldpaper_schema = new Schema(
    {
        quetion:
        {
            type: String,
            required: true
        },
        key:
        {
            type: String,
            required: true
        }
    }
);


const quetion_schema = new Schema(
    {
        difficulty:
        {
            type: String,
            enum: ["high", "medium", "easy"],
            required: true
        },
        quetion:
        {
            type: String,
            required: true
        },
        answer:
        [{
            type: String,
            required: true
        }]
    }
);

const co_schema = new Schema(
    {
        co:
        {
            type: String,
            required: true
        },
        quetions: [quetion_schema]
    }
);


const subject_schema = new Schema(
    {
        subjectName:
        {
            type: String,
            required: true
        },
        branch:
        {
            type: String,
            required: true
        },
        year:
        {
            type: Number,
            required: true
        },
        oldpapers: [oldpaper_schema],
        cos: [co_schema],
        cheatsheet:
        {
            type: String,
            required: true
        },
        notes:
            [{
                type: String,
                required: true
            }],
        videos:
            [{
                type: String,
                required: true
            }]
    }
);

const Subject=mongoose.model("subject",subject_schema);
export default Subject;