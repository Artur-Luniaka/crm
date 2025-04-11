"use client";
import React from "react";

const CompaniesInfoBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-full p-10 bg-[#f3f4f6]">{children}</div>
  );
};

export default CompaniesInfoBox;
