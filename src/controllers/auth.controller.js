import { Apierror } from "../utils/Apierror.js";
import { Asynchanler } from "../utils/Asynchhandler.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { User } from "../models/auth.model.js";



const registerUser = Asynchanler(async (req, res) => {
    try {
        const { name, email, password, Branch, Year } = req.body;
        console.log(name, email, password, Branch, Year);

        if (!name || !email || !password || !Branch || !Year) {
            throw new Apierror(404, "all fileds are required");
        }

        const existUser = await User.findOne({
            $or: [{ name }, { email }]
        });
        if (existUser) {
            throw new Apierror(409, "user alredy exist");
        }

        const existUser1 = await User.create(
            {
                name: name.toLowerCase,
                email: email.toLowerCase,
                password,
                Branch,
                Year

            }
        );
        const finaluser = await User.findById(existUser1._id).select('-password -refreshToken');
        if (!finaluser) {
            throw new Apierror(409, "user alredy exits");
        }
        res.status(200).json
            (
                new Apiresponse(200, finaluser, "register succesfully")
            )
    } catch (error) {
        console.log("error", error);

    }
});

export { registerUser };