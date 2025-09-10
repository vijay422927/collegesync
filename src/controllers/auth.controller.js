import { Apierror } from "../utils/Apierror.js";
import { Asynchanler } from "../utils/Asynchhandler.js";
import { Apiresponse } from "../utils/Apiresponse.js";
import { User } from "../models/auth.model.js";
import validateRegistration from "../utils/validation.js";
import logger from "../utils/logger.js";

const registerUser = Asynchanler(async (req, res) => {
  try {
    const { name, email, password, branch, year } = req.body;
    console.log(name, email, password, branch, year);

    if (!name || !email || !password || !branch || !year) {
      throw new Apierror(404, "all fileds are required");
    }

    const existUser = await User.findOne({
      $or: [{ name }, { email }],
    });
    if (existUser) {
      throw new Apierror(409, "user alredy exist");
    }

    const { error } = validateRegistration(req.body);
    console.log(error);

    if (error) {
      logger.warn("invalid input fields", error);
      return res
        .status(400)
        .json(new Apiresponse(400, req.body, "invalid input fields"));
    }
    console.log("hi hello");
    const existUser1 = await User.create({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password,
      branch,
      year,
    });
    const finaluser = await User.findById(existUser1._id).select(
      "-password -refreshToken"
    );
    if (!finaluser) {
      throw new Apierror(409, "user alredy exits");
    }
    res
      .status(200)
      .json(new Apiresponse(200, finaluser, "register succesfully"));
  } catch (error) {
    logger.warn("error while regisering the user", error);
  }
});

const loginUser = Asynchanler(async (req, res) => {
  const { name, password } = req.body;

  console.log(name, password);

  try {
    const user = await User.findOne({ name });

    //if not send a error message to user not registered..
    if (!user) {
      throw new Apierror(404, "user not found");
    }

    const isPasswordMatch = await user.isPasswordCorrect(password);
    if (!isPasswordMatch) {
      logger.info("password is incorrect ");
      return res
        .status(400)
        .json(new Apiresponse(400, password, "password is incorrect"));
    }

    const token = await user.generateAccessToken();
    user.token = token; // required for the logout

    if (!token) {
      logger.warn("token is not defined");
    }
    res.status(200).json(
      new Apiresponse(
        200,
        {
          // send name,email,_id with token
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          token,
        },
        "user is logined successfully"
      )
    );
  } catch (error) {
    logger.warn("failed to login user ", error);
    return res.status(400).json({
      success: false,
      message: "failed to login user ",
    });
  }
});

const logout = Asynchanler(async (req, res) => {
  try {
    if (!req.user) {
      throw new Apierror(401, "Unauthorized, please login first");
    }

    const user = req.user._id;
    console.log(user);

    const finaluser = await User.findById(user);

    if (!finaluser) {
      throw new Apierror(404, "you should login first");
    }

    finaluser.token = null;
    await finaluser.save();
    res.status(200).json(new Apiresponse(200, "logout succesfully"));
  } catch (error) {
    console.log("error", error);
  }
});


const forgotpassword=Asynchanler(async (req,res) => {
  const{email,newpassword,confirmpassword}=req.body;

  if(!email || !newpassword ||!confirmpassword)
  {
    throw new Apierror(404,"all  fields are required");
  }
  if(newpassword!=confirmpassword)
  {
    throw new Apierror(409,"password must be same");
  }

  const user=await User.findOne({email});
  if(!user)
  {
    throw new Apierror(404,"email is notregistered");
  }

   user.password=newpassword;
   await user.save();

   res.status(200)
   .json(
    new Apiresponse(200,"password changed succesfully")
   );

});
export { registerUser, loginUser, logout ,forgotpassword};
