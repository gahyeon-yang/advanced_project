import React, { useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "@/stores/useAuthStore";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/icon_logo_img.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/utils/validate";

export default function LoginForm() {
  const { setLogin } = useAuthStore();
  const router = useRouter();

  const handleLogin = () => {
    setLogin("테스트용 드리머", "Dreamer");
    // setLogin("테스트용 메이커", "Maker");
    router.push("/");
  };

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    // setLogin(data.email, data.role);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center gap-16 h-full">
      <Image src={logo} alt="로고" />
      <form className="w-full gap-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          placeholder="이메일을 입력해 주세요"
          type="text"
          className="h-16"
          label="이메일"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <Input
          {...register("password")}
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          className="h-16"
          label="비밀번호"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <div className="flex justify-center">
          <Button
            label="로그인"
            onClick={handleLogin}
            className="w-full py-4 bg-color-blue-300 text-white bold rounded-2xl"
          />
        </div>
      </form>
      <div className="flex justify-center">
        <p className="mr-2">아직 니가가라하와이 회원이 아니신가요?</p>
        <Link href="/signup" className="text-blue-500 hover:underline">
          이메일로 회원가입하기
        </Link>
      </div>
      <div className="">
        <h2>SNS 계정으로 간편 가입하기</h2>
      </div>
    </div>
  );
}
