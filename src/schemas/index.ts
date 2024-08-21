import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email({ message: "Geçersiz e-posta formatı" }),
  password: z
    .string()
    .min(8, { message: "Şifreniz en az 8 karakter uzunluğunda olmalıdır" })
    .max(20, { message: "Şifreniz en fazla 20 karakter uzunluğunda olabilir" })
    .regex(/(?=.*[a-z])/, {
      message: "Şifreniz en az bir küçük harf içermelidir",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "Şifreniz en az bir büyük harf içermelidir",
    })
    .regex(/(?=.*\d)/, { message: "Şifreniz en az bir rakam içermelidir" })
    .regex(/(?=.*[@$!%*?&])/, {
      message:
        "Şifreniz en az bir özel karakter (@, $, !, %, *, ?, &) içermelidir",
    }),
});
