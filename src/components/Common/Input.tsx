import { useState } from "react";
import Image from "next/image";
import icon_visible_off from "@public/assets/icon_visibility_off.svg";
import icon_visible_on from "@public/assets/icon_visibility_on.svg";

type InputProps = {
  type: "text" | "password" | "textarea";
  value?: string;
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
};

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType =
    type === "textarea" ? (
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    ) : type === "password" ? (
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded-xl p-4 h-16 ${className}`}
        />
        <Image
          src={isPasswordVisible ? icon_visible_on : icon_visible_off}
          onClick={togglePasswordVisibility}
          width={24}
          height={24}
          alt={isPasswordVisible ? "비밀번호 보기" : "비밀번호 감추기"}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    ) : (
      <input
        className={`w-full border rounded-xl p-4 h-16 hover:border-color-blue-300 ${className}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {inputType}
    </div>
  );
}
