import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Common/Input";
import React from "react";
import { signUpSchema, SignUpFormData } from "@/utils/validate";
import logo from "@public/assets/icon_logo_img.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data); // 테스트용
  };

  return (
    <div className="flex flex-col items-center gap-16 h-full">
      <Image src={logo} alt="로고" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full gap-8 flex flex-col"
      >
        <div className="mb-2">
          <Input
            type="text"
            label="이름"
            placeholder="성함을 입력해주세요"

            {...register("name")}
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-2">
          <Input
            type="text"
            label="이메일"
            placeholder="이메일을 입력해 주세요"

            {...register("email")}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-2">
          <Input
            type="text"
            label="전화번호"
            placeholder="숫자만 입력해주세요"

            {...register("phone")}
          />
          {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        <div className="mb-2">
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"

            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-2">
          <Input
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한번 입력해 주세요"

            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button type="submit" label="회원가입" />
      </form>
    </div>
  );
}