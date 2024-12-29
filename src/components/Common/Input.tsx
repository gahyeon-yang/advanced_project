import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
};

const Input = ({ value, onChange, placeholder = '', type = 'text', disabled = false, className = '' }: InputProps)=> {
  return (
    <div>
    <input className='text-xl regular w-full text-gray-400 border-gray-500'
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
    </div>
  );
};

export default Input;