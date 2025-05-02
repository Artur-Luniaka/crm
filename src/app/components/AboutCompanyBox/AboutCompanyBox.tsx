"use client";
import React from "react";

const AboutCompanyBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full gap-5 px-10 pb-10 bg-[#ffffff]">{children}</div>
  );
};

export default AboutCompanyBox;
