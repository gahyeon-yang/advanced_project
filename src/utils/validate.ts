import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().min(1, "이메일을 입력해 주세요").email("이메일 형식이 아닙니다.").optional(),
    password: z.string().nonempty("비밀번호를 입력해 주세요").min(6, "비밀번호는 최소 6자 이상이어야 합니다.").optional(),
  });

export type LoginFormData = z.infer<typeof loginSchema>;

export const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "이름을 입력해 주세요" }).optional(),
    email: z.string().min(1, { message: "이메일을 입력해 주세요" }).email({ message: "이메일 형식이 아닙니다." }).optional(),
    phone: z.string().regex(/^010\d{8}$/, { message: "010으로 시작하고 숫자만 입력해 주세요." }).optional(),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자 이상이어야 합니다.").optional(),
    confirmPassword: z.string().min(1, { message: "비밀번호 확인란을 입력해 주세요." }).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
