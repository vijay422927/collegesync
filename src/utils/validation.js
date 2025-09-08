import joi from "joi";

const validateRegistration = (data) => {
  const schema = joi.object({
    username: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    branch: joi.string(),
    year: joi.number().min(1).max(3),
    refreshToken: joi.string(),
  });

  return schema.validate(data);
};

export default validateRegistration;
