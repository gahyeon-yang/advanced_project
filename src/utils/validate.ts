import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().nonempty("이름을 입력해주세요."),
    email: z.string().nonempty("이메일을 입력해주세요.").email("이메일 형식이 아닙니다."),
    phone: z.string().regex(/^010\d{8}$/, "010으로 시작하고 숫자만 입력해주세요."),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자 이상이어야 합니다.")
      .max(20, "비밀번호는 최대 20자까지 가능합니다."),
    confirmPassword: z.string().min(6, "비밀번호 확인란을 입력해주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
