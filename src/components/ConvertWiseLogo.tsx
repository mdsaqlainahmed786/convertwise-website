import React from 'react';

export function ConvertWiseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/convertwiselogo1.svg"
        alt="ConvertWise"
        className="h-12 sm:h-14 w-auto object-contain transition-opacity duration-200 hover:opacity-90 dark:bg-white dark:rounded-lg dark:px-2 dark:py-1"
      />
    </div>
  );
}


