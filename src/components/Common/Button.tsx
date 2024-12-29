import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({ label, onClick, disabled = false, className = ''}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;