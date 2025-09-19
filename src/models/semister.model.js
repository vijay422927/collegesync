
import mongoose from "mongoose";
import { Schema } from "mongoose";

const semister_schema = new Schema(
    {
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
        semester:
            {
                type: String,
                required: true
            },
        subjects:
       [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subject"
       }]
    },

    {
        timestamps: true
    }
);
const Sem = mongoose.model("sem", semister_schema);
export default Sem;
