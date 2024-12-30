import React, { useState } from "react";
import { useRouter } from "next/router";
import useAuthStore from "@/stores/useAuthStore";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/icon_logo_img.svg";

export default function LoginForm() {
  const { setLogin } = useAuthStore();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setLogin("테스트용 드리머", "Dreamer");
    // setLogin("테스트용 메이커", "Maker");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-2xl flex flex-col">
        <Image src={logo} alt="로고" />
        <form className="flex flex-col gap-10">
          <label>이메일</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해 주세요"
            type="text"
          />
          <label>비밀번호</label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요"
            type="password"
          />
          <div className="flex justify-center">
            <Button
              label="로그인"
              onClick={handleLogin}
              className="py-4 w-full bg-color-gray-100 text-white rounded-2xl mb-14"
            />
          </div>
        </form>
        <div className="flex justify-center">
          <p className="mr-2">아직 니가가라하와이 회원이 아니신가요?</p>
          <Link href="/signup" className="text-blue-500 hover:underline">
            이메일로 회원가입하기
          </Link>
        </div>
        <div className="flex justify-center">
          <h2>SNS 계정으로 간편 가입하기</h2>
        </div>
      </div>
    </div>
  );
}
