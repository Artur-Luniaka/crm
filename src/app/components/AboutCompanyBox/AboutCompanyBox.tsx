"use client";
import React from "react";

const AboutCompanyBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-full px-10 pb-10 bg-[#ffffff]">
      {children}
    </div>
  );
};

export default AboutCompanyBox;
