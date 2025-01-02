import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";
import Image from "next/image";
import logo from "@public/assets/icon_logo_img.svg";
import menu from "@public/assets/icon_menu.svg";
import { useState } from "react";
import closeIcon from "@public/assets/icon_X.svg";
import alarm_icon from "@public/assets/icon_alarm.svg";
import user_img from "@public/assets/icon_default.svg";
import chatting_icon from "@public/assets/icon_chatting.svg";
import coconut_icon from "@public/assets/icon_coconut.svg";

const NavBar = () => {
  const { isLoggedIn, nickname, role, setLogout } = useAuthStore();
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setIsOpenSidebar(true);
  };
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
    <div className="flex items-center justify-between py-6 bg-color-background-200 pc:px-32 tablet:px-5 mobile:px-4">
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-20">
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="임시로고" />
          </Link>
        </div>

        <ul className="hidden space-x-6 text-2lg bold pc:flex">{renderLinks()}</ul>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <div className="flex items-center space-x-2">
              <Image src={coconut_icon} alt="코코넛" width={36} height={36} />
              <p className="regular">50p</p>
            </div>
            <Image src={chatting_icon} alt="채팅" width={36} height={36} />
            <Image src={alarm_icon} alt="알림" width={36} height={36} />
            <div className="flex items-center space-x-2">
              <Image src={user_img} alt="유저이미지" width={36} height={36} />
              <span className="text-2lg medium hidden pc:block">{nickname}</span>
            </div>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="hidden pc:block px-6 py-3 bg-color-blue-300 rounded-2xl hover:bg-color-blue-200 text-white text-2lg semibold">
                로그인
              </button>
            </Link>
          </>
        )}
        <Image
          src={menu}
          alt="메뉴"
          width={30}
          height={30}
          className="block pc:hidden cursor-pointer"
          onClick={handleOpenSidebar}
        />
      </div>
      {/* 사이드바 */}
      {isOpenSidebar && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-end items-center">
          <div className="flex flex-col bg-white w-[220px] h-full p-4 shadow-lg ">
            <div className="flex justify-end mb-4">
              <Image
                src={closeIcon}
                alt="닫기"
                width={36}
                height={36}
                className="cursor-pointer"
                onClick={() => setIsOpenSidebar(false)}
              />
            </div>
            <div className="h-0.5 bg-color-line-100"></div>
            <ul className="flex flex-col space-y-4 mt-6 text-lg bold gap-y-10 cursor-pointer">
              {renderLinks()}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
