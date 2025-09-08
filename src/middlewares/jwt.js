import { User } from "../models/auth.model.js";
import { Apierror } from "../utils/Apierror.js";
import jwt from "jsonwebtoken";
const verifyjwt = async (req, res) => {
    try {
        const token = await req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new Apierror(404, "token not found");
        }
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decode._id).select("--v");
        if (!user) {
            throw new Apierror(409, "authentication failed");
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error", error);

    }
};
export {verifyjwt};