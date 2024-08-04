import { z } from "zod";

const userSchema = z.object({
  user: z.string({ message: "Email is required" }),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email or password"),
  password: z
    .string({ message: "Email is required" })
    .min(8, { message: "Password is less then 8 digit" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one digit" })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "Password must contain at least one special character",
    }),
});

const CheckValidity = async (data) => {
  try {
    const result = await userSchema.safeParse(data);
    console.log("under", result);
    return result;
  } catch (error) {
    return error;
  }
};

export default CheckValidity;
