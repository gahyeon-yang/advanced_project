import React from "react";
import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";

const NavBar = () => {
  const { isLoggedIn, nickname, role, setLogout } = useAuthStore();

  const renderLinks = () => {
    if (!isLoggedIn) {
      return (
        <>
          <li>
            <Link href="/">Maker 찾기</Link>
          </li>

        </>
      );
    }

    if (role === "Dreamer") {
      return (
        <>
          <li>
            <Link href="/">여행 요청</Link>
          </li>
          <li>
            <Link href="/">Maker 찾기</Link>
          </li>
          <li>
            <Link href="/">내 여행 관리</Link>
          </li>
        </>
      );
    }

    if (role === "Maker") {
      return (
        <>
          <li>
            <Link href="/">받은 요청</Link>
          </li>
          <li>
            <Link href="/">내 여행 관리</Link>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between py-10 bg-color-background-200 lg:px-32  md:px-5 sm:px-4">
      <div className="flex items-center">
      <div className="text-2xl font-bold mr-20">
        <Link href="/">임시 로고</Link>
      </div>

      <ul className="flex space-x-6 text-2lg bold">{renderLinks()}</ul>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <div className="flex items-center space-x-2">
              <span className="text-2lg medium">{nickname}</span>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="px-6 py-3 bg-color-blue-300 rounded-2xl hover:bg-color-blue-200 text-white text-2xl semibold">로그인</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
