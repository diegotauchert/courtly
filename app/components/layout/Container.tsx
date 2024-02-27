"use client"

import React, { ReactNode } from 'react';

export const Container: React.FC<{ children: ReactNode; fitWidth?: boolean }> = ({ children, fitWidth }) => {
  return (
    <div className={`${fitWidth ? 'w-fit' : 'w-full'}`}>
      <main className="flex flex-col md:flex-row flex-1 justify-center m-5 md:my-11 md:ml-14 md:mr-20 bg-white rounded-xl shadow-custom md:min-h-screen">
        {children}
      </main>
    </div>
  )
}