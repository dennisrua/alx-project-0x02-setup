import React from 'react';
import { type ButtonProps } from '@interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
