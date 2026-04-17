import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

// Composant simple mais très utilisé comme "conteneur visuel"
export default function Card({ children, title, className = '' }: CardProps) {
  return (
   <div
      className={`
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        rounded-xl shadow-sm
        p-4
        ${className}
      `}
    >
      {title && (
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}