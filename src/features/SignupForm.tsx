import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Common/Input";
import React from "react";
import { signUpSchema, SignUpFormData } from "@/utils/validate";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">회원가입</h2>

        <div className="mb-4">
          <Input
            type="text"
            label="이름"
            value=""
            placeholder="성함을 입력해주세요"
            className="w-full p-2 border rounded"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <Input
            type="text"
            label="이메일"
            value=""
            placeholder="이메일을 입력해 주세요"
            className="w-full p-2 border rounded"
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <Input
            type="text"
            label="전화번호"
            value=""
            placeholder="숫자만 입력해주세요"
            className="w-full p-2 border rounded"
            {...register("phone")}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <Input
            type="password"
            label="비밀번호"
            value=""
            placeholder="비밀번호를 입력해 주세요"
            className="w-full p-2 border rounded"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <Input
            type="password"
            label="비밀번호 확인"
            value=""
            placeholder="비밀번호를 다시 한번 입력해 주세요"
            className="w-full p-2 border rounded"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
