import { Apierror } from "../utils/Apierror.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { Asynchanler } from "../utils/Asynchhandler.js";
import User from "../models/auth.model.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const authcontroller = Asynchanler(async (req, res) => {
    try {
        const { idtoken } = req.body; // expecting from frontend / Postman

        if (!idtoken) {
            throw new Apierror(404, "idtoken not found");
        }

        console.log("Received idtoken:", idtoken);

        // Verify Google token
        const ticket = await client.verifyIdToken({
            idToken: idtoken, // lowercase in body, uppercase in Google lib
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { sub: googleId, name, email, picture } = payload;

        let user = await User.findOne({ googleId });
        if (!user) {
            user = await User.create({ googleId, name, email, picture });
        }

        const accesstoken = user.generateAccessToken();

        res.status(200).json(
            new Apiresponse(
                200,
                {
                    user: {
                        _id: user._id,
                        googleId: user.googleId,
                        name: user.name,
                        email: user.email,
                        picture: user.picture
                    },
                    accesstoken
                },
                "login successful"
            )
        );
    } catch (error) {
        console.log("error", error);
        res.status(500).json(new Apierror(500, "Google auth failed"));
    }
});

export { authcontroller };
