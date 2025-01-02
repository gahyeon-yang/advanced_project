import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/Common/Input";
import React from "react";
import { signUpSchema, SignUpFormData } from "@/utils/validate";
import logo from "@public/assets/icon_logo_img.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";
import Link from "next/link";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data); // 테스트용
  };

  const watchFields = watch();
  const isFormValid = Object.values(watchFields).every((value) => value?.toString().trim() !== "");

  const ErrorMessage = ({ message }: { message: string | undefined }) => (
    <p className="text-color-red-200 mt-1 absolute right-0">{message}</p>
  );

  return (
    <div className="flex flex-col items-center gap-8 h-full">
      <Image src={logo} alt="로고" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-8 flex flex-col relative">
        <div>
          <Input
            type="text"
            label="이름"
            placeholder="성함을 입력해주세요"
            {...register("name")}
            error={!!errors.name}
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </div>

        <div>
          <Input
            type="text"
            label="이메일"
            placeholder="이메일을 입력해 주세요"
            {...register("email")}
            error={!!errors.email}
          />
          {errors.email && <ErrorMessage message={errors.email.message} />}
        </div>

        <div>
          <Input
            type="text"
            label="전화번호"
            placeholder="숫자만 입력해주세요"
            {...register("phone")}
            error={!!errors.phone}
          />
          {errors.phone && <ErrorMessage message={errors.phone.message} />}
        </div>

        <div>
          <Input
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            {...register("password")}
            error={!!errors.password}
          />
          {errors.password && <ErrorMessage message={errors.password.message} />}
        </div>

        <div>
          <Input
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한번 입력해 주세요"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && <ErrorMessage message={errors.confirmPassword.message} />}
        </div>
        <div className="mb-2">
          <p>역할</p>
          <div className="flex justify-around">
            <label htmlFor="dreamer" className="flex gap-2">
              <input type="radio" value="dreamer" {...register("role")} />
              Dreamer
            </label>
            <label htmlFor="maker" className="flex gap-2">
              <input type="radio" value="maker" {...register("role")} />
              Maker
            </label>
          </div>
          {errors.role && <ErrorMessage message={errors.role.message} />}
        </div>
        <Button type="submit" label="회원가입" disabled={!isFormValid} />
      </form>
      <div className="flex justify-center">
        <p className="mr-2">이미 니가가라하와이 회원이신가요?</p>
        <Link href="/login" className="text-color-blue-300 underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
