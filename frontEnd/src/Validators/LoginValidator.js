import * as z from "zod";

const LoginValidator = z.object({
  email: z
    .string()
    .regex(
      /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/,
      "Please enter a valid email address",
    ),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password must not exceed 128 characters")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character",
    )
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});

export default LoginValidator;
