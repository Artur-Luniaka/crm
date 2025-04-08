"use client";
import React from "react";

const DashBoardStatsBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="p-10 min-w-[1200px] w-full">{children}</div>;
};

export default DashBoardStatsBox;
