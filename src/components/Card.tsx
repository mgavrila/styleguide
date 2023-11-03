import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ className = '', children }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-400 w-full rounded-2xl max-w-7xlxl ${className}`}
    >
      {children}
    </div>
  );
};
