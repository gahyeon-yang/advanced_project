import useAuthStore from "@/stores/useAuthStore";
import Link from "next/link";

export default function Notification() {
  const { nickname, role, setLogout } = useAuthStore();

  if (role === "guest") return null;

  const renderMenus = () => {
    const menuItems = {
      Dreamer: [
        { href: "/", label: "프로필 수정" },
        { href: "/", label: "찜한 Maker" },
        { href: "/", label: "여행 리뷰" },
      ],
      Maker: [{ href: "/", label: "마이페이지" }],
    };

    return (
      <>
        {menuItems[role ? role : "Dreamer"].map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="fixed flex top-20 right-20 z-[9999] tablet:right-16">
        <div className=" bg-color-gray-50 rounded-2xl shadow-lg px-2 pt-6 flex flex-col gap-6 w-[248px] border mobile-tablet:w-[152px] ">
          <div className="flex justify-between items-center px-6 mobile-tablet:pl-2">
            <span className="text-2lg bold mobile-tablet:text-lg">
              {nickname}
              {role}
            </span>
          </div>
          <div>
            <ul className="text-lg flex flex-col gap-6 medium px-6 mobile-tablet:text-md mobile-tablet:pl-2">
              {renderMenus()}
            </ul>
          </div>
          <div className="h-[1px] w-full bg-color-line-100"></div>
          <div className="flex justify-center text-color-gray-500 pb-4 mobile-tablet:text-xs">
            로그아웃
          </div>
        </div>
      </div>
    </>
  );
}
