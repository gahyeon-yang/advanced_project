import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: string;
};

const Button = ({ label, onClick, disabled = false, className = '', type }: ButtonProps) => {
  return (
    <button className={`w-full py-4 bg-color-blue-300 text-white bold rounded-2xl ${className}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;