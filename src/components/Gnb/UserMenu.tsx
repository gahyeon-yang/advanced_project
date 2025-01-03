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
      <div className="fixed flex top-20 right-12 z-[9999] tablet:right-16">
        <div className=" bg-color-gray-50 rounded-2xl px-8 py-3 w-[248px] text-2lg bold border pc:w-[152px]">
          <div className="flex justify-between items-center ">
            <span className="text-2lg">{nickname}</span>
          </div>
          <div>
            <ul className="text-2lg">{renderMenus()}</ul>
          </div>
          <div>로그아웃</div>
        </div>
      </div>
    </>
  );
}
